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
        if (this.state.clicked === true) {
            return "clicked";
        }
        ;
    };

    handleClick() {
        this.setState({
            clicked: true
        });
        this.props.handleCounter(this.props.data.id);
    };

    render() {
        return (
            <span className="EmployeeContainer">
                <img className={(this.state.clicked ? "clicked " : "") +
                                (this.props.chosen ? "chosen" : "notChosen")}
                    onClick={() => this.handleClick()}
                    src={this.props.data.headshot.url}
                    alt={this.props.data.headshot.alt}
                />
                <span className={"mask " +
                            (this.state.clicked ? "clicked " : "") +
                            (this.props.chosen ? "chosen" : "notChosen")}>
                </span>
                <span className={"centered " + (this.state.clicked ? "clicked " : "")}>
                    {this.props.data.firstName} {this.props.data.lastName}
                </span>
            </span>
        );
    };
};

Employee.propTypes = {
    data: PropTypes.object,
    handleEmployeeClick: PropTypes.func,
    chosen: PropTypes.bool,
    handleCounter: PropTypes.func
};


export default Employee;