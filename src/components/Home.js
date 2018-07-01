// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import  '../css/home.css';
import poster from '../images/big_logo_uninorte.png';

class Home extends Component {
  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="description top-left" >
              Technology and healthcare, advancing together towards a better, kinder future
            </h1>
          </div>
          <div className="col">
            <div className="poster">
              <img src={ poster } className="img-fluid" alt="Main poster" />
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className="row">
          <div className="col">
            <h2 className="description-2">
              Meet our revolutionary engineers and medics, that are working for a better future
            </h2>
          </div>
          <div className="col">
            <Link to="/panelist" className="btn btn-warning pan-btn">Panelists</Link>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
