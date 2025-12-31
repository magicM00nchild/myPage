import { NavLink } from "react-router-dom";
import logo from "../assets/mushroom.PNG"; // Beispiel: relativer Pfad zu deinem Bild

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Dorit Logo" style={{ height: "50px" }} />
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  );
}
