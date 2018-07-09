// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../css/App.css';

// Components
import Navbar from './Navbar';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children } = this.props;
    return (
      <div className="bg-img">
        <Navbar />
        {children}
      </div>
    );
  }
}

export default App;
