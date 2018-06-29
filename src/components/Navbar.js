// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import  '../css/navbar.css';
import  logo  from '../images/big_logo_uninorte.png';

class NavBar extends Component {
  render(){
    return(
      <div className="row">
        <div className="spliter"></div>
        <nav className="navbar navbar-expand-lg navbar-light bg">
          <Link to="/" className="navbar-brand" >
            <img src={ logo } width="90px" height="90px"  alt="Logo" />
          </Link>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/panelist" className="nav-item nav-link link-size" >Panelist</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/" className="nav-item nav-link link-size" >Prices</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/" className="nav-item nav-link link-size" >Location</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/" className="nav-item nav-link link-size" >Sponsors</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/" className="nav-item nav-link link-size" href="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
