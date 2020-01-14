import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
     <header className="navbar navbar-dark bg-dark navbar-expand-lg">
       <nav >
        <Link to="/" className="navbar-brand">Interview & Freelance Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Tasks</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Assign Task</Link>
          </li>
          <li className="navbar-item">
          <Link to="/addcandidate" className="nav-link">Add Candidate</Link>
          </li>

          <li className="navbar-item">
          <Link to="/listcandidate" className="nav-link">List Candidates</Link>
          </li>

          {/* <li className="navbar-item">
          <Link to="/product" className="nav-link">Add Task</Link>
          </li> */}

        </ul>
        </div>
      </nav>
      </header>
    );
  }
}