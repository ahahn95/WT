import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Employee from "../Employee/Employee";
import Name from "../Name/Name";

const NameGame = ({selectedList, chosenEmployee}) => {
    return (
        <div>
            <Name chosenEmployee={chosenEmployee}/>
            {selectedList.map(employee => {
                return <Employee key={employee.id} data={employee}/>
            })}
        </div>
    );
};

NameGame.propTypes = {
    selectedList: PropTypes.array,
    chosenEmployee: PropTypes.object
};

export default NameGame;