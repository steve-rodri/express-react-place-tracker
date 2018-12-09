import React from 'react';
import './Nav.css'

export default function Nav(props) {
  return (
    layout(props)
  )
}

function layout(props){
  switch (props.view) {
    case 'Create Place':
      return (
        <div className="Nav">
          <button className="nav-button" onClick={() => props.handleMainViewChange('Places')}>All</button>
        </div>
      )
    case 'Places':
      return (
        <div className="Nav">
          <button className="nav-button" onClick={() => props.handlePlacesViewChange(getView(props))}>{getView(props)}</button>
          <button className="nav-button" onClick={() => props.handleMainViewChange('Create Place')}>Create</button>
        </div>
      )
    default:
  }
}

function getView(props){
  switch (props.placesView) {
    case 'All':
      return 'Visited'
    case 'Visited':
      return 'All'
    default:
  }
}
