import React from 'react';
import './Place.css';

export default class Place extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      visited: props.place.visited
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      visited: nextProps.place.visited
    })
  }

  visitedButton() {
    if (this.state.visited) {
      return ({
        backgroundColor:'blue',
        color: 'white'
      })
    }
  }

  render(){
    const place = this.props.place;
    return (
      <div className="Place">
        <h3 className="place-name">{place.name}</h3>
        <div className="place-description">
          <p className="place-address">{place.address}</p>
          <p>{place.description}</p>
        </div>
        <div className="buttons">
          <button className="place-button visited-button" onClick={this.props.handleVisitChange} style={this.visitedButton()}>Visited</button>
          {this.props.placesView === "All" && <button className="place-button delete-button" onClick={this.props.handleDelete}>Delete</button>}
        </div>
      </div>
    )
  }
}
