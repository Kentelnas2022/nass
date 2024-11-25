import React, { useState } from "react";
import EmployeeList from "./EmployeeList";

const TimeTracker = () => {
  const initialEmployees = [
    { name: "Ramber", isClockedIn: false, lastTime: null },
    { name: "Nathan", isClockedIn: false, lastTime: null },
    { name: "Shannon", isClockedIn: false, lastTime: null },
  ];

  const [employees, setEmployees] = useState(initialEmployees);

  const toggleClock = (index) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee, i) =>
        i === index
          ? {
              ...employee,
              isClockedIn: !employee.isClockedIn,
              lastTime: Date.now(),
            }
          : employee
      )
    );
  };

  return <EmployeeList employees={employees} onToggle={toggleClock} />;
};

export default TimeTracker;
