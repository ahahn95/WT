import React from 'react';
import PropTypes from 'prop-types';

const Employee = ({firstName}) => {
    return (

        <p>{firstName}</p>
    );
};

Employee.propTypes = {
    firstName: PropTypes.string
};

export default Employee;