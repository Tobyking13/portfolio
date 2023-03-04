import React from 'react';
import { NavLink } from 'react-router-dom';

import "./style.css"

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item btn-grad">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="portfolio"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Learn
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="lightDark"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
        
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
