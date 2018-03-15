import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Employee from "../Employee/Employee";

const NameGame = ({selectedList}) => {
    return (
        <div>
            {selectedList.map(employee => {
                return <Employee data={employee}/>
            })}
        </div>
    );
};

NameGame.propTypes = {
    selectedList: PropTypes.array
};

export default NameGame;