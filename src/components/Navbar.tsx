import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h1>Dorit</h1>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}
