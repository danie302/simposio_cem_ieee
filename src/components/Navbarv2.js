// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// Assets
import  '../css/navbar.css';
import  logo  from '../images/big_logo_uninorte.png';

class NavBar extends Component {
  render(){
    return(
      <div className="container-fluid bg-warning border">
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
          <Link to="/" className="navbar-brand" >
            <img src={ logo } className="img-fluid" width="90px" height="90px"  alt="Logo" />
          </Link>

          <div className="collapse navbar-collapse  justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/panelist" className="nav-link link-size" >Panelist</Link>
              </li>
              <li className="nav-item active">
                <Link to="/" className="nav-link link-size" >Prices</Link>
              </li>
              <li className="nav-item active">
                <Link to="/" className="nav-link link-size" >Location</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
