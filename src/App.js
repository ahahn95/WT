import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
        employeeList: []
    };
  }

  componentWillMount() {
      fetch('https://willowtreeapps.com/api/v1.0/profiles/')
          .then(response => response.json())
          .then((response) => {
              this.setState({
                  employeeList: response,
              });
          });
  }
    
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
