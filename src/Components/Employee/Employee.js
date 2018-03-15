import React from 'react';
import PropTypes from 'prop-types';

const Employee = ({data}) => {
    return (
        <span>
            <img src={data.headshot.url} width="100px"/>
        </span>
    );
};

Employee.propTypes = {
    data: PropTypes.string
};

export default Employee;