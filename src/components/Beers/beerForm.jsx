import React from 'react'
import { withRouter } from 'react-router-dom'

const BeerForm = ({ name, beerType, description, brewery, address, rating, handleSubmit, handleChange }) => {
  return (
    <div className="general-beer-form">
      <form className="beer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="beer-name">Beer Name</label>
          <input
            required
            className="form-control"
            name="name"
            placeholder="Beer Name"
            type="text"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="beer-type">Beer Type</label>
          <input
            required
            className="form-control"
            name="beerType"
            placeholder="Beer Type"
            type="text"
            value={beerType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="description">Description</label>
          <input
            required
            className="form-control"
            name="description"
            placeholder="Beer Description"
            type="text"
            value={description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="brewery">Brewery</label>
          <input
            required
            className="form-control"
            name="brewery"
            placeholder="Brewery"
            type="text"
            value={brewery}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="location">Location</label>
          <input
            required
            className="form-control"
            name="location"
            placeholder="Address"
            type="text"
            value={address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="rating">ABV</label>
          <input
            required
            className="form-control"
            name="rating"
            placeholder="ABV"
            type="number"
            value={rating}
            onChange={handleChange}
          />
        </div>
        <button className="btn-danger create-button" type="submit">Submit</button>
      </form>
    </div>
  )
}

export default withRouter(BeerForm)
