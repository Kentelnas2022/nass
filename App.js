import React from 'react';
import EmployeeList from './EmployeeList';
import './style.css';
const App = () => {
  const employees = ['Elnas', 'Bob', 'Robber'];

  return (
    <div className="App">
      <h1>Ellry Cafe - Employee Time Tracker</h1>
      <EmployeeList employees={employees} />
    </div>
  );
};

export default App;
