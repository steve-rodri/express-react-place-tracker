import React from 'react';
import './PlacesForm.css'

export default function PlacesForm(props){
  return (
    <div className="form-container">
      <form onSubmit={props.onSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={props.formData.name}
          onChange={props.onChange}
        />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={props.formData.address}
          onChange={props.onChange}
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={props.formData.description}
          onChange={props.onChange}
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  )
}
