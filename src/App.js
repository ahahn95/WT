import React, {Component} from "react";
import NameGame from "./Components/NameGame/NameGame";
import "./App.css"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeList: [],
            selectedList: [],
            chosenEmployee: [],
            counter: {
                correct: 0,
                incorrect: 0,
                guessed: false
            }
        };

        this.shuffle = this.shuffle.bind(this);
        this.setSelectedListAndChosenEmployee = this.setSelectedListAndChosenEmployee.bind(this);
        this.handleCounter = this.handleCounter.bind(this);
    }

    onPlayClick() {
        fetch("https://willowtreeapps.com/api/v1.0/profiles/")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    employeeList: json
                });
            })
            .then(this.setSelectedListAndChosenEmployee);
    };

    setSelectedListAndChosenEmployee() {
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

    handleCounter(id) {
        if(id == this.state.chosenEmployee.id) {
            this.setState({
                counter: {
                    ...this.state.counter,
                    correct: this.state.counter.correct + 1
                }
            })
        } else {
            this.setState({
                counter: {
                    ...this.state.counter,
                    incorrect: this.state.counter.incorrect + 1
                }
            })
        }

    }

    render() {
        return (
            <div className="App">
                <div onClick={() => this.onPlayClick()}>Play</div>
                <div>
                    <span>Correct: {this.state.counter.correct} </span>
                    <span>Incorrect: {this.state.counter.incorrect}</span>
                </div>
                {!!this.state.selectedList.length ?
                    <NameGame
                        chosenEmployee={this.state.chosenEmployee}
                        selectedList={this.state.selectedList}
                        handleEmployeeClick={this.handleEmployeeClick}
                        handleCounter={this.handleCounter}
                    />: ''}
            </div>
        );
    };
}

export default App;
