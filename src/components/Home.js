// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import  '../css/home.css';
import img from '../images/big_logo_uninorte.png'
import circuit from '../images/circuit.png'

class Home extends Component {
  render(){
    return(
      <div>
        <div className="row">
          <div className="col-sm-5">
            <div className="container">
              <img src={ circuit } alt="Circuit Background" className="img-bg" width="400px" height="400px" ></img>
              <h1 className="description top-left" >
                Technology and healthcare, advancing together towards a better, kinder future
              </h1>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="poster">
              <img src={ img } width="400px" height="400px" alt="Main poster" />
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
          <div className="col-sm-5">
            <h2 className="description-2">
              Meet our revolutionary engineers and medics, that are working for a better future
            </h2>
          </div>
          <div className="col-sm-5">
            <Link to="/panelist" className="btn btn-warning pan-btn">Panelists</Link>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
