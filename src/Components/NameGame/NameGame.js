import React from 'react';
import PropTypes from 'prop-types';
import Employee from "../Employee/Employee";
import Name from "../Name/Name";
import "./NameGame.css"

const NameGame = ({selectedList, chosenEmployee, handleEmployeeClick}) => {
    return (
        <div>
            <Name chosenEmployee={chosenEmployee}/>
            <div className="pic-wrapper">
                {selectedList.map(employee => {
                    return <Employee
                        chosen={chosenEmployee.id === employee.id}
                        key={employee.id}
                        data={employee}
                        handleEmployeeClick={handleEmployeeClick}
                    />
                })}
            </div>
        </div>
    );
};

NameGame.propTypes = {
    selectedList: PropTypes.array,
    chosenEmployee: PropTypes.object,
    handleEmployeeClick: PropTypes.func
};

export default NameGame;