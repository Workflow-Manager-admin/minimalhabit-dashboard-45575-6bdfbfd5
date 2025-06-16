import React, { useEffect, useRef, useState } from 'react';
import './StreakProgressBar.css';

/**
 * PUBLIC_INTERFACE
 * StreakProgressBar
 * Props:
 *   - completedDays (number): How many days completed
 *   - goalDays (number): Total goal days
 * 
 * Displays a pastel animated progress bar for streaks, with percentage label.
 */
const StreakProgressBar = ({ completedDays = 0, goalDays = 21 }) => {
  // Clamp progress to valid range
  const progress = Math.max(0, Math.min(1, goalDays ? completedDays / goalDays : 0));
  const percent = Math.round(progress * 100);

  // Animated width (uses state so we can animate on prop changes)
  const [barWidth, setBarWidth] = useState(0);
  const widthRef = useRef(progress);

  useEffect(() => {
    // Animate the bar from the previous progress to the new progress
    // Animation is handled by CSS transitions, just update the width value after a render tick
    setTimeout(() => setBarWidth(progress), 15);
    widthRef.current = progress;
  }, [progress]);

  return (
    <div className="streak-progressbar-outer" aria-label={`Progress: ${percent}%`}>
      <div className="streak-progressbar-bar-bg">
        <div
          className="streak-progressbar-bar-fill"
          style={{
            width: `${barWidth * 100}%`,
          }}
        />
      </div>
      <div className="streak-progressbar-label">
        {percent}% Complete
      </div>
    </div>
  );
};

export default StreakProgressBar;
