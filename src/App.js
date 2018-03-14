import React, { Component } from 'react';
import logo from './logo.svg';
import Employee from "./Components/Employee/Employee";
import NameGame from "./Components/NameGame/NameGame";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        employeeList: []
    };

    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
      fetch('https://willowtreeapps.com/api/v1.0/profiles/')
          .then(response => response.json())
          .then(json => {
              this.setState({
                  employeeList: json
              });
          });
  }

  render() {
    return (
      <div className="App">
          <NameGame/>
          { this.state.employeeList.length > 0 ?  console.log(this.state.employeeList[0].firstName): '' }
      </div>
    );
  }
}

export default App;
