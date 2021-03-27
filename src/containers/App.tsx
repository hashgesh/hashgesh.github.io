import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import routes from '../Routes';
import Home from './Home';
import Sidebar from '../components/Sidebar';

// import PropTypes from 'prop-types';

// const propTypes = {};

// const defaultProps = {};

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Header name='Header' /> */}
        <Sidebar></Sidebar>
        <div className='mContentContainer'>{routes}</div>

        {/* <Footer name='Footer' /> */}
      </React.Fragment>
    );
  }
}

// App.propTypes = propTypes;
// App.defaultProps = defaultProps;
