import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  // State to store the list of employees
  const [employees, setEmployees] = useState([]);

  // Function to fetch and set the list of employees
  const fetchEmployees = async () => {
    try {
      // Make a GET request to the endpoint that retrieves the list of employees
      const response = await axios.get('http://localhost:8089/api/employees');
      
      // Update the state with the list of employees
      setEmployees(response.data);
    } catch (error) {
      // Handle errors (e.g., display error message)
      console.error('Error fetching employees:', error.message);
    }
  };

  // useEffect hook to fetch employees when the component mounts
  useEffect(() => {
    fetchEmployees();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div>
      <h2>Employee List</h2>
      {/* Display the list of employees */}
      <ul>
        {employees.map((employee) => (
          <li key={employee._id}>{employee.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
