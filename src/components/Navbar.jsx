import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/certificates">Certificates</NavLink>
    </nav>
  );
}

export default Navbar;
