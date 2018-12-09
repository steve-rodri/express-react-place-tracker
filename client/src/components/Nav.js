import React from 'react';
import './Nav.css'

export default function Nav(props) {
  return (
    <div className="Nav">
      <button className="nav-button" onClick={() => props.handlePlacesViewChange(getView(props))}>{getView(props)}</button>
      <button className="nav-button" onClick={() => props.handleMainViewChange('Create')}>Create</button>
    </div>
  )
}

function getView(props){
  switch (props.placesView) {
    case 'All':
      return 'Visited'
      break;
    case 'Visited':
      return 'All'
      break;
    default:
  }
}
