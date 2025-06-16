import React from 'react';
import './AddHabitCard.css';

/**
 * PUBLIC_INTERFACE
 * AddHabitCard component for adding a new habit.
 * Renders a pastel card UI with inputs for habit name, frequency, start date, and an "Add Habit" button.
 * No form-handling or logic yet—UI only.
 */
const AddHabitCard = () => {
  return (
    <div className="add-habit-card-outer">
      <div className="add-habit-card">
        <h2 className="add-habit-title">Add New Habit</h2>
        <form className="add-habit-form" autoComplete="off">
          <div className="form-group">
            <label htmlFor="habit-name" className="form-label">Habit Name</label>
            <input
              id="habit-name"
              className="form-input"
              type="text"
              placeholder="e.g. Drink Water"
              name="habitName"
              disabled={false}
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="habit-frequency" className="form-label">Frequency</label>
            <select
              id="habit-frequency"
              className="form-input"
              name="habitFrequency"
              defaultValue="Daily"
              disabled={false}
            >
              <option>Daily</option>
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="habit-start-date" className="form-label">Start Date</label>
            <input
              id="habit-start-date"
              className="form-input"
              type="date"
              name="startDate"
              disabled={false}
            />
          </div>
          <button type="button" className="add-habit-btn">
            Add Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddHabitCard;
