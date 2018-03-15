import React, {Component} from "react";
import NameGame from "./Components/NameGame/NameGame";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeList: [],
            selectedList: [],
            chosenEmployee: []
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.shuffle = this.shuffle.bind(this);
        this.getChosenEmployee = this.getChosenEmployee.bind(this);
        // this.handleEmployeeClick = this.handleEmployeeClick.bind(this);
    }

    componentWillMount() {
        fetch("https://willowtreeapps.com/api/v1.0/profiles/")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    employeeList: json
                });
            });
        };

    onPlayClick() {
        let tempSelectedList = this.shuffle(this.state.employeeList).slice(0,5)
        this.setState({
            selectedList: tempSelectedList,
            chosenEmployee: tempSelectedList[this.getChosenEmployee()]
        });
    };

    getChosenEmployee() {
        return Math.floor(Math.random() * 5);
    };

    shuffle(input) {
        for (let i = input.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [input[i], input[j]] = [input[j], input[i]];
        };
        return input;
    };
    //
    //
    // handleEmployeeClick(id) {
    //     if(id === this.state.chosenEmployee.id) {
    //
    //     } else {
    //         console.log("no");
    //     }
    // }

    render() {
        return (
            <div className="App">
                <div onClick={() => this.onPlayClick()}>Play</div>
                {!!this.state.selectedList.length ?
                    <NameGame
                        chosenEmployee={this.state.chosenEmployee}
                        selectedList={this.state.selectedList}
                        handleEmployeeClick={this.handleEmployeeClick}
                    />: ''}
            </div>
        );
    };
}

export default App;
