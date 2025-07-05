import React from 'react';
import '../style.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <i className="bx bx-home"></i>
      <i className="bx bx-movie"></i>
      <i className="bx bx-tv"></i>
      <i className="bx bx-bookmark"></i>
      <div className="spacer"></div>
      <i className="bx bx-user profile"></i>
    </aside>
  );
}
