import React, { useState } from 'react';

const TimeTracker = ({ employee, onClockInOut }) => {
  const [status, setStatus] = useState('Clocked Out');
  const [timestamp, setTimestamp] = useState(null);

  const handleClockInOut = () => {
    const currentTimestamp = new Date().toLocaleString();
    if (status === 'Clocked Out') {
      setStatus('Clocked In');
      setTimestamp(currentTimestamp);
      onClockInOut(employee, 'Clocked In', currentTimestamp);
    } else {
      setStatus('Clocked Out');
      setTimestamp(currentTimestamp);
      onClockInOut(employee, 'Clocked Out', currentTimestamp);
    }
  };

  return (
    <div className="employee">
      <p>{employee}</p>
      <p>Status: {status}</p>
      <p>Last Activity: {timestamp || 'N/A'}</p>
      <button onClick={handleClockInOut}>
        {status === 'Clocked Out' ? 'Clock In' : 'Clock Out'}
      </button>
    </div>
  );
};

export default TimeTracker;
