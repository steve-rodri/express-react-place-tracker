import React from 'react';
import Place from './Place';
import './PlacesList.css';

export default function PlacesList(props) {
  return (
    <div className="Places">
      {getView(props)}
    </div>
  )
}

function getView(props){
  switch (props.view) {
    case "Visited":
      return (
        <div>
          <div className="visited-places">
            {props.places.map( place => {
              if (place.visited) {
                return (
                  <Place
                    place={place}
                    key={place.id}
                    handleVisitChange={(e) => {
                      e.stopPropagation();
                      props.onVisitChange(place);
                    }}
                    placesView={props.view}
                  />
                )
              }
            })}
          </div>
        </div>
      )
    case "All":
    return (
      <div>
        <div className="all-places">
          {props.places.map( place => {
            return (
              <Place
                place={place}
                key={place.id}
                handleDelete={(e) => {
                  e.stopPropagation();
                  props.onDelete(place.id);
                }}
                handleVisitChange={(e) => {
                  e.stopPropagation();
                  props.onVisitChange(place);
                }}
                placesView={props.view}
              />
            )
          })}
        </div>
      </div>
    )
    default:
  }
}
