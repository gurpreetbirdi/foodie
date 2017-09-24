import React, { Component } from 'react';
import Home from './components/Home';
import Community from './components/Community';
import Location from './components/Location';
import OurMenu from './components/OurMenu';
import Recipies from './components/Recipies';
import Collaborate from './components/Collaborate';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Community />
        <Location />
        <OurMenu />
        <Recipies />
        <Collaborate />
        <Footer />
      </div>
    );
  }
}

export default App;
