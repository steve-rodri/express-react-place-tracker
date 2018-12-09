import React, { Component } from "react";
import Nav from './components/Nav';
import PlacesList from './components/PlacesList';
import PlacesForm from './components/PlacesForm';
import "./App.css";
const { AXIOS } = require("./services/AJAXRequests");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: 'Places',
      placesView: 'All',
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
    } catch (e) {
      console.log("REACT - request to AXIOS failed - Could not DELETE place ", e);
    }
  }

  async updatePlace(data) {
    try {
      const place = await AXIOS.updatePlace(data);
    } catch (e) {
      console.log("REACT - request to AXIOS failed - Could not UPDATE place ", e)
    }
  }

  setView = (view) => {
    this.setState({
      currentView: view
    })
  }

  setPlacesView = (view) => {
    this.setState({
      placesView: view
    })
  }

  getView() {
    switch (this.state.currentView) {
      case 'Places':
        return (
          <PlacesList
            places={this.state.places}
            onDelete={this.handleDelete}
            onVisitChange={this.handleVisitChange}
            view={this.state.placesView}
          />
        )
      case 'Create':
        return (
          <PlacesForm />
        )
      default:

    }
  }

  handleDelete = async(id) => {
    this.deleteFromState(id);
    await this.deletePlace(id);
  }

  deleteFromState = (id) => {
    const places = [...this.state.places];
    const i = places.findIndex(place => place.id === id)
    places.splice(i, 1);
    this.setState({
      places: places
    })
  }

  updateFromState = (data) => {
    const places = [...this.state.places];
    const i = places.findIndex(place => place.id === data.id)
    places[i] = data;
    this.setState({
      places: places
    })
  }

  handleVisitChange = async(place) => {
    const data = {
      ...place,
      visited: !(place.visited)
    }
    await this.updatePlace(data);
    this.updateFromState(data);
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Place-Tracker</h1>
          {this.state.currentView === 'Places' && <h2>{this.state.placesView}</h2>}
        </header>
        <div className="Page">
          {this.getView()}
        </div>
        <Nav
          view={this.state.currentView}
          placesView={this.state.placesView}
          handlePlacesViewChange={this.setPlacesView}
          handleMainViewChange={this.setView}
        />
      </div>
    );
  }
}

export default App;
