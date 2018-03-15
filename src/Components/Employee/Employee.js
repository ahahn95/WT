import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Employee.css';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };

        this.getClass = this.getClass.bind(this);
    }

    getClass() {
        if (this.state.clicked == true) {
            return "clicked";
        }
        ;
    };

    handleClick() {
        this.setState({
            clicked: true
        });
    };

    render() {
        return (
            <span className="EmployeeContainer">
                <img className={(this.state.clicked ? "clicked " : "") +
                                (this.props.chosen ? "chosen" : "notChosen")}
                    onClick={() => this.handleClick()}
                    src={this.props.data.headshot.url}
                    width="100px"
                    alt={this.props.data.headshot.alt}
                />
                <span className={"centered " + (this.state.clicked ? "clicked " : "")}>
                    {this.props.data.firstName} {this.props.data.lastName}
                </span>
            </span>
        )
    }
}

// const Employee = ({data, handleEmployeeClick}) => {
//     return (
//         {/*<span>*/}
//             {/*<img*/}
//                 {/*onClick={() => handleEmployeeClick(data.id)}*/}
//                 {/*src={data.headshot.url}*/}
//                 {/*width="100px"*/}
//                 {/*alt={data.headshot.alt}*/}
//             {/*/>*/}
//         {/*</span>*/}
//     );
// };
//
Employee.propTypes = {
    data: PropTypes.object,
    handleEmployeeClick: PropTypes.func,
    chosen: PropTypes.bool
};


export default Employee;