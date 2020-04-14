import React from "react";
import "./App.css";

function TheNavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/home">
        <h4>Lig legend</h4>
      </a>
      <ul className="navbar-nav ml-auto">
        <li className={"nav-item "}>
          <a className="nav-link" href="/home">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/champions">
            Champions
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/players">
            Players
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/items" to="/players">
            Items
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default TheNavBar;
