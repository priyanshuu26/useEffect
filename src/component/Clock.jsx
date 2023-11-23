import React, { useEffect, useState } from 'react';

function Clock() {
  const [time, setTime] = useState(null);
  const realTime = new Date();
  useEffect(() => {
    setInterval(() => {
      setTime(realTime);
    }, 1000);
  });
  const hours = realTime.getHours();
  const mins = realTime.getMinutes();
  const secs = realTime.getSeconds();
  return (
    <div>
      <h1>
        {hours} hr : {mins} min : {secs} sec
      </h1>
    </div>
  );
}

export default Clock;
