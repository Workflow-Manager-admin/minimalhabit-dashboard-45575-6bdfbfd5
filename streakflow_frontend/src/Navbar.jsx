import React from "react";

/**
 * PUBLIC_INTERFACE
 * Navbar component for StreakFlow Dashboard.
 * Displays left-aligned app name and right-aligned profile icon, with pastel background, subtle shadow, and bottom border.
 */
// Ensure no use of PUBLIC_URL or any undefined env vars.
const Navbar = () => {
  return (
    <nav className="sf-navbar">
      <div className="sf-navbar__container">
        <div className="sf-navbar__brand">
          <span role="img" aria-label="StreakFlow Logo" className="sf-navbar__emoji">📈</span>
          StreakFlow
        </div>
        <div className="sf-navbar__profile">
          {/* Simple profile avatar (circle with initial, can be replaced with an SVG/icon) */}
          <div className="sf-navbar__avatar" title="Profile">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="16" fill="#e4e6eb" stroke="#bbb" strokeWidth="1"/>
              <circle cx="20" cy="17" r="6" fill="#bcd2e8"/>
              <ellipse cx="20" cy="28" rx="8" ry="5" fill="#f6f7fa"/>
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
