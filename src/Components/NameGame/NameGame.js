import React, { Component } from 'react';
import Employee from "../Employee/Employee";

class NameGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            randomEmployees: []
        };

        this.getRandomEmployees = this.getRandomEmployees.bind(this);
        this.shuffle = this.shuffle.bind(this);
    };


  // getRandomEmployees () {
  //   this.setState(this.shuffle(this.state.randomEmployees));
  // }
  //
  // shuffle ( employees ) {
  //   for ( let i = employees.length - 1; i > 0; i-- ) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [ employees[ i ], employees[ j ] ] = [ employees[ j ], employees[ i ] ];
  //   }
  //   return employees;
  // }

    render() {
        return(
            <div>
            </div>
        )
    }
}

export default NameGame;