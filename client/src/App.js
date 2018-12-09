import React, { Component } from "react";
import "./App.css";
const { AXIOS } = require("./services/AJAXRequests");

class App extends Component {
  async componentDidMount() {
    // await this.deletePlace(1);
    await this.getPlaces();
  }

  async getPlaces() {
    try {
      const places = await AXIOS.getPlaces();
      console.log(places);
    } catch (e) {
      console.log("REACT - request to AXIOS failed - Could not Get Places ", e);
    }
  }

  async postPlace() {
    try {
      const data = {
        name: "REACT",
        description: "works from REACT",
        visited: false,
        address: "1434 mirabelle"
      };
      const place = await AXIOS.postPlace(data);
      console.log(place);
    } catch (e) {
      console.log("REACT - request to AXIOS failed - Could not POST place ", e);
    }
  }

  async deletePlace(id) {
    try {
      const place = await AXIOS.deletePlace(id);
      console.log(place);
    } catch (e) {
      console.log("REACT - request to AXIOS failed - Could not DELETE place ", e);
    }
  }

  render() {
    return <div className="App" />;
  }
}

export default App;
