import React, { Component } from "react";
import "./App.css";
const { AXIOS } = require("./services/AJAXRequests");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      formData: {
        name: '',
        description: '',
        visited: false,
        address: ''
      }
    }
  }

  async componentDidMount() {
    await this.getPlaces();
  }

  async getPlaces() {
    try {
      const places = await AXIOS.getPlaces();
      this.setState({
        places: places
      })
    } catch (e) {
      console.log("REACT - request to AXIOS failed - Could not Get Places ", e);
    }
  }

  async postPlace() {
    try {
      const data = this.state.formData;
      const place = await AXIOS.postPlace(data);
      console.log(place);
    } catch (e) {
      console.log("REACT - request to AXIOS failed - Could not POST place ", e);
    } finally {
      this.setState({
        formData: {
          name: '',
          description: '',
          visited: false,
          address: ''
        }
      })
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
