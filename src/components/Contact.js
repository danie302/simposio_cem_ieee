// Dependencies
import React, { Component } from 'react';


// Assets
import  '../css/contact.css';

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

              <div className="jumbotron">
                <h1 className="display-4">Contact us</h1>
                <p className="lead">To get more information about the event you could contact one of our organizers.</p>
                <hr className="my-4"/>
                <p className="lead">
                  <a className="btn btn-warning btn-lg" role="button" onClick={ this.onClick }>Contact us</a>
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

              <div className="jumbotron">
                <h1 className="display-4">Contact us</h1>
                <p className="lead">To get more information about the event you could contact one of our organizers.</p>
                <hr className="my-4"/>
                <h6 className="title">Mail</h6>
                <p>simposio.bioingenieria@gmail.com</p>
                <h6 className="title">Number</h6>
                <p>+57 xxx xxxxxxx</p>
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
