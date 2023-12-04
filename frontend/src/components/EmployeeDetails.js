import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeDetails = ({ match }) => {
  const { id } = match.params;

  return (
    <div>
      <h2>Employee Details</h2>
      <Link to={`/employee/${id}/update`}>Update</Link>
      {' | '}
      <button>Delete</button>
    </div>
  );
};

export default EmployeeDetails;
