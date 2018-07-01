// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// Assets
import  '../css/navbar.css';
import  logo  from '../images/uninorte_horizontal.png';

class NavBar extends Component {
  render(){
    return(
        <nav className="navbar navbar-expand-xl navbar-light bg-warning">
          <Link to="/" className="navbar-brand" >
            <img src={ logo } className="img-fluid" width="90px" height="90px"  alt="Logo" />
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/panelist" className="nav-link link-size" >Panelist</Link>
              </li>
              <li className="nav-item active">
                <Link to="/" className="nav-link link-size" >Prices</Link>
              </li>
              <li className="nav-item active">
                <Link to="/location" className="nav-link link-size" >Location</Link>
              </li>
              <li className="nav-item active">
                <Link to="/contact" className="nav-link link-size" >Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default NavBar;
