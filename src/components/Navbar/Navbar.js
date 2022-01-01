import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <div>Furniture Factory</div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <span>Login</span>
          <span>Cart</span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
