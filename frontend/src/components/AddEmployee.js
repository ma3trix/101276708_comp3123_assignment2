import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Use this import statement only once

const AddEmployee = () => {
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const history = useHistory();

  const handleChange = (e) => {
    setEmployeeData({
      ...employeeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit employee data (e.g., API call)
    // Redirect to Employee List page
    history.push('/');
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        {/* ... rest of your component code ... */}
      </form>
    </div>
  );
};

export default AddEmployee;
