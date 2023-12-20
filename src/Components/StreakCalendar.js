import React from "react";
import "./Cal.css";
const StreakCalendar = ({ streakDates }) => {
  const currentMonth = new Date();
  const streakData = streakDates;


  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth);
    const calendar = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(
        <div key={`empty-${i}`} className="calendar-day empty"></div>
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateToCheck = `${currentMonth.getFullYear()}-${
        currentMonth.getMonth() + 1
      }-${day}`;
      const isStreakDay = streakData.some(
        (datee) => datee.split("T")[0] === dateToCheck
      );

      calendar.push(
        <div
          key={day}
          className={`calendar-day ${isStreakDay ? "streak-day" : ""}`}
        >
          {day}
        </div>
      );
    }

    return calendar;
  };
  const renderDayLabels = () => {
    const dayLabels = ["Su", "M", "T", "W", "Th", "F", "S"];
    return dayLabels.map((label) => (
      <div key={label} className="day-label">
        {label}
      </div>
    ));
  };

  return (
    <div className="streak-calendar">
      <div className="calendar-header">
        This{" "}
        {currentMonth.toLocaleDateString("en-US", {
          month: "long",
        })}
      </div>
      <div className="calendar-grid">
        {renderDayLabels()}
        {renderCalendar()}
      </div>
    </div>
  );
};

export default StreakCalendar;
