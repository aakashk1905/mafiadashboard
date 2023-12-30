import React, { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    // Update the countdown every second
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const nextSaturday = getNextSaturday();
    const timeDifference = nextSaturday - now;

    if (timeDifference <= 0) {
      // If it's already Saturday 8 pm IST, calculate time until next Saturday
      const nextSaturdayAfterCurrent = new Date(nextSaturday);
      nextSaturdayAfterCurrent.setDate(nextSaturdayAfterCurrent.getDate() + 7);
      return calculateTimeRemaining();
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  function getNextSaturday() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysUntilSunday = 1 - dayOfWeek + (dayOfWeek >= 0 ? 7 : 0); // 0 corresponds to Sunday

    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + daysUntilSunday);
    nextSunday.setHours(19, 0, 0, 0); // Set the time to 8 pm IST

    return nextSunday;
  }

  return (
    <span>
      {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m{" "}
      {timeRemaining.seconds}s
    </span>
  );
};

export default CountdownTimer;
