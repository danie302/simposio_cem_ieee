// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Assets
import '../css/App.css';

// Components
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children } = this.props;
    return (
      <div className="container-fluid">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }
}

export default App;
