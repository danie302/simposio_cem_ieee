// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import  '../css/navbar.css';
import poster from '../images/big_logo_uninorte.png';

class Footer extends Component {
  render(){
    return(
      <div className="container-fluid bg-warning border">
        <nav class="navbar navbar-expand-lg navbar-light navbar-fixed-bottom">
          <div class="navbar-header">
            <Link to="" class="navbar-brand" >
              <img src={ poster } className="img-fluid" width="90px" height="90px"  alt="Logo" />
            </Link>
          </div>
          <div className="navbar navbar-collapse collapse">
            <div className="navbar-nav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-item nav-link link-size" >IEEE</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/" className="nav-item nav-link link-size" >CEM</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/" className="nav-item nav-link link-size" >SPONSOR</Link>
                </li>
                <li className="nav-item active">
                  <Link to="/" className="nav-item nav-link link-size" >Uninorte</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Footer;
