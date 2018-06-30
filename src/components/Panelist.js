// Dependencies
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// Assets
import  '../css/panelist.css';
import user from '../images/user.png'

class Panelist extends Component {
  render(){
    return(
      <div className="container-fluid">

        <br/>
        <br/>
        <br/>

        
        <div className="row">
          <div className="col">
            <div className="card test">
              <img className="card-img-top" src={ user } width="200px" height="250px" alt="Card cap"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card test">
              <img className="card-img-top" src={ user } width="200px" height="250px" alt="Card cap2"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <br/>

        <div className="row">
          <div className="col">
            <div className="card test">
              <img className="card-img-top" src={ user } width="200px" height="250px" alt="Card cap3"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card test">
              <img className="card-img-top" src={ user } width="200px" height="250px" alt="Card cap4"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <br/>


        <div className="row">
          <div className="col">
            <div className="card test">
              <img className="card-img-top" src={ user } width="200px" height="250px" alt="Card cap5"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br/>
        <br/>
        <br/>


      </div>
    );
  }
}

export default Panelist;
