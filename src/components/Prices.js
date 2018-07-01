// Dependencies
import React, { Component } from 'react';


class Prices extends Component {
  render(){
    return(
      <div className="container-fluid">

        <br/>
        <br/>
        <br/>


        <div className="row">
          <div className="col">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">CEM</h5>
                <h6 class="card-subtitle mb-2 text-muted">Cem Members</h6>
                <p class="card-text">XXXXXX</p>
              </div>
            </div>
          </div>
          
          <div className="col">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">IEEE</h5>
                <h6 class="card-subtitle mb-2 text-muted">IEEE Members</h6>
                <p class="card-text">XXXXXX</p>
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

export default Prices;
