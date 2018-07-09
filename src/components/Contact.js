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
            <div className="container-fluid ">

              <br/>
              <br/>
              <br/>

              <div className="jumbotron contact">
                <h1 className="titles">Contact us</h1>
                <p className="parag">To get more information about the event you could contact one of our organizers.</p>
                <hr className="my-4"/>
                <p className="lead">
                  <a className="btn btn-warning pan-btn2" role="button" onClick={ this.onClick }>Contact us</a>
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

              <div className="jumbotron contact">
                <h1 className="titles">Contact us</h1>
                <p className="parag">To get more information about the event you could contact one of our organizers.</p>
                <hr className="my-4"/>
                <h6 className="titles-2">Mail</h6>
                <p className="parag-2">simposio.bioingenieria@gmail.com</p>
                <h6 className="titles-2">Number</h6>
                <p className="parag-2">+57 xxx xxxxxxx</p>
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
