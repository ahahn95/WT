import React, { Component } from "react";
import NameGame from "./Components/NameGame/NameGame";

class App extends Component {

  constructor ( props ) {
    super(props);
    this.state = {
      employeeList: [],
      selectedList: []
    };

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount () {
    fetch("https://willowtreeapps.com/api/v1.0/profiles/").then(response => response.json()).then(json => {
      this.setState({
        employeeList: json
      });
    });
  };

  setSelectedEmployees() {

  }


  render () {
    return (
      <div className="App">
        {!!this.state.employeeList.length ? <NameGame employeeList={this.state.employeeList}/> : ''}
      </div>
    );
  }
}

export default App;
