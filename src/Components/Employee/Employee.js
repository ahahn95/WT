import React from 'react';
import PropTypes from 'prop-types';

const Employee = ({data, handleEmployeeClick}) => {
    return (
        <span>
            <img onClick={() => handleEmployeeClick(data.id)} src={data.headshot.url} width="100px"/>
        </span>
    );
};

Employee.propTypes = {
    data: PropTypes.object,
    handleEmployeeClick: PropTypes.func
};

export default Employee;