import React, { useState } from 'react';
import TimeTracker from './TimeTracker';

const EmployeeList = ({ employees }) => {
  const [employeeData, setEmployeeData] = useState(
    employees.reduce((acc, employee) => {
      acc[employee] = { status: 'Clocked Out', timestamp: null };
      return acc;
    }, {})
  );

  const handleClockInOut = (employee, status, timestamp) => {
    setEmployeeData((prevData) => ({
      ...prevData,
      [employee]: { status, timestamp },
    }));
  };

  return (
    <div>
      {employees.map((employee) => (
        <TimeTracker
          key={employee}
          employee={employee}
          onClockInOut={handleClockInOut}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
