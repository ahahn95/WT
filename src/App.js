import React, {Component} from "react";
import NameGame from "./Components/NameGame/NameGame";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeList: [],
            selectedList: []
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.shuffle = this.shuffle.bind(this);
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
        this.setState({
            selectedList: this.shuffle(this.state.employeeList).slice(0,5)
        });
    };

    shuffle(input) {
        for (let i = input.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [input[i], input[j]] = [input[j], input[i]];
        }
        return input;
    }


    render() {
        return (
            <div className="App">
                {!!this.state.employeeList.length ? <NameGame employeeList={this.state.employeeList}/> : ''}
                <div onClick={() => this.onPlayClick()}>Play</div>
            </div>
        );
    }
}

export default App;
