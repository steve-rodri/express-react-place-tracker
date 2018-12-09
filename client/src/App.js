import React, { Component } from 'react';
import './App.css';
const { AXIOS } = require('./services/AJAXRequests');

class App extends Component {
  async componentDidMount(){
    await this.getPlaces();
  }

  async getPlaces(){
    try {
      const places = await AXIOS.getPlaces();
      console.log(places);
    } catch (e) {
      console.log("REACT - request to AXIOS failed - Could not Get Places ", e)
    }
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
