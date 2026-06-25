

import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" >
        Cryptoboard
      </NavLink>
      <NavLink to="/">
        Dashboard
      </NavLink>

    </nav>
  );
}

export default Navbar;

