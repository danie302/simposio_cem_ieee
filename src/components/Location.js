// Dependencies
import React, { Component } from 'react';

// Assets
import '../css/maps.css';

class Location extends Component {
  render(){
    return(
      <div className="container-fluid">

        <h1 className="title">Universidad del Norte</h1>

        <br/>
        <br/>
        <br/>

        <iframe className="maps" title="Map to Uninorte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2549997263327!2d-74.85261495024668!3d11.019484657636418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42c6a20b68621%3A0x5c3de7e774806ad1!2sUniversidad+Del+Norte!5e0!3m2!1ses!2sco!4v1530484708072" frameborder="0" allowfullscreen></iframe>

        <br/>
        <br/>
        <br/>

      </div>
    );
  }
}

export default Location;
