
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaCalendarAlt, FaTasks } from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Admin</h2>
      <nav className="nav-links">
        <NavLink to="/dashboard" className="nav-link">
          <FaTachometerAlt /> Dashboard
        </NavLink>
        <NavLink to="/calendar" className="nav-link">
          <FaCalendarAlt /> Calendar
        </NavLink>
        <NavLink to="/kanban" className="nav-link">
          <FaTasks /> Kanban
        </NavLink>
      </nav>
    </div>
  );
}
