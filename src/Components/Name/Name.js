import React from 'react';
import PropTypes from "prop-types";

const Name = ({chosenEmployee}) => {
  return (
      <h2>Who is {chosenEmployee.firstName} {chosenEmployee.lastName}?</h2>
  )
};

Name.propTypes = {
    chosenEmployee: PropTypes.object
};

export default Name;