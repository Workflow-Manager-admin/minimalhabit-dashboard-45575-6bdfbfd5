import React from "react";
import "./CalendarSection.css";

// PUBLIC_INTERFACE
/**
 * CalendarSection renders a full month grid view for streak/progress display.
 * Shows each day's completion (checkmark, colored streak/missed highlight), using soft pastel, rounded UI.
 * Right now, uses static demonstration data.
 */
const sampleData = [
  // Format: [{ date: 1, completed: true }, ...]
  // Simulate a month of 30 days for demo
  ...Array.from({ length: 30 }, (v, i) => ({
    date: i + 1,
    completed: [1, 2, 3, 4, 5, 6, 8, 9, 10, 13, 14, 15, 16, 22, 23, 24, 27, 28, 29, 30].includes(i + 1), // arbitrary streak
    missed: [7, 12, 17, 21].includes(i + 1),
  }))
];

const daysInWeek = ["S", "M", "T", "W", "T", "F", "S"];
const monthName = "April 2024";

function getFirstDayOfWeek() {
  // For demo: Assume this month's 1st falls on Monday (index 1)
  return 1;
}

const CalendarSection = () => {
  const firstWeekday = getFirstDayOfWeek();
  const daysCount = sampleData.length;

  // Prepare grid: Add leading blanks based on first weekday
  const gridDays = [
    ...Array(firstWeekday).fill(null),
    ...sampleData
  ];

  // Pad for a 6-row calendar grid if needed (always 42 cells)
  while (gridDays.length < 42) gridDays.push(null);

  return (
    <section className="calendar-section">
      <h2 className="calendar-section-title">Calendar</h2>
      <div className="calendar-month-label">{monthName}</div>
      <div className="calendar-grid">
        {/* Weekdays header */}
        {daysInWeek.map((d, i) => (
          <div className="calendar-day-label" key={`wd-${i}`}>{d}</div>
        ))}
        {gridDays.map((dayObj, idx) => {
          if (!dayObj)
            return <div className="calendar-day empty" key={`empty-${idx}`}></div>;

          let dayClass = "calendar-day";
          if (dayObj.completed) dayClass += " calendar-day-completed";
          else if (dayObj.missed) dayClass += " calendar-day-missed";
          else dayClass += " calendar-day-neutral";

          return (
            <div className={dayClass} key={`day-${dayObj.date}`}>
              <span className="calendar-day-number">{dayObj.date}</span>
              {dayObj.completed && (
                <span className="calendar-day-checkmark" title="Habit Done">
                  {/* Inline SVG checkmark for crispness */}
                  <svg width="17" height="17" viewBox="0 0 18 18" className="checkmark-svg">
                    <polyline points="5,10.5 8,14 13,6" stroke="#167b3a" strokeWidth="2.3" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              )}
              {dayObj.missed && (
                <span className="calendar-day-missed-x" title="Missed">
                  <svg width="14" height="14" viewBox="0 0 14 14" className="miss-x-svg">
                    <line x1="3" y1="3" x2="11" y2="11" stroke="#ed1c24" strokeWidth="1.6" strokeLinecap="round"/>
                    <line x1="11" y1="3" x2="3" y2="11" stroke="#ed1c24" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CalendarSection;
