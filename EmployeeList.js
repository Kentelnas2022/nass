import React from "react";

const EmployeeList = ({ employees, onToggle }) => {
  return (
    <div>
      {employees.map((employee, index) => (
        <div key={index} className="employee-card">
          <h3>{employee.name}</h3>
          <p>Status: {employee.isClockedIn ? "Clocked In" : "Clocked Out"}</p>
          <p>
            Last Time:{" "}
            {employee.lastTime
              ? new Date(employee.lastTime).toLocaleString()
              : "N/A"}
          </p>
          <button onClick={() => onToggle(index)}>
            {employee.isClockedIn ? "Clock Out" : "Clock In"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;
