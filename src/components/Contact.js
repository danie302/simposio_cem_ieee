// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


// Assets
import  '../css/contact.css';
import  logo  from '../images/big_logo_uninorte.png';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    this.setState({show: true,});
  }

  render(){
        if (this.state.show === false) {
          return(
            <div className="container-fluid">

              <br/>
              <br/>
              <br/>

              <div class="jumbotron">
                <h1 class="display-4">Contact us</h1>
                <p class="lead">To get more information about the event you could contact one of our organizers.</p>
                <hr class="my-4"/>
                <p class="lead">
                  <a class="btn btn-primary btn-lg" role="button" onClick={ this.onClick }>Learn more</a>
                </p>
              </div>

              <br/>
              <br/>
              <br/>

            </div>
        );
        }
        if (this.state.show === true) {
          return(
            <div className="container-fluid">

              <br/>
              <br/>
              <br/>

              <div class="jumbotron">
                <h1 class="display-4">Contact us</h1>
                <p class="lead">To get more information about the event you could contact one of our organizers.</p>
                <hr class="my-4"/>
                <p class="lead">Renderizado</p>
              </div>

              <br/>
              <br/>
              <br/>

            </div>
        );
        }
  }
}

export default Contact;
