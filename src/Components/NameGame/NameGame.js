import React from 'react';
import PropTypes from 'prop-types';
import Employee from "../Employee/Employee";
import Name from "../Name/Name";

const NameGame = ({selectedList, chosenEmployee, handleEmployeeClick}) => {
    return (
        <div>
            <Name chosenEmployee={chosenEmployee}/>
            {selectedList.map(employee => {
                return <Employee
                    key={employee.id}
                    data={employee}
                    handleEmployeeClick={handleEmployeeClick}
                />
            })}
        </div>
    );
};

NameGame.propTypes = {
    selectedList: PropTypes.array,
    chosenEmployee: PropTypes.object,
    handleEmployeeClick: PropTypes.func
};

export default NameGame;