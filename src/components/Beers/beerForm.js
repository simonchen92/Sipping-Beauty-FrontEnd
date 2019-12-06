import React from 'react'
import { withRouter } from 'react-router-dom'

// eslint-disable-next-line camelcase
const BeerForm = ({ name, beer_type, description, brewery, address, rating, handleSubmit, handleChange }) => {
  return (
    <div className="general-beer-form">
      <form className="beer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="beer-name">Beer Name</label>
          <input
            required
            name="name"
            className="form-control"
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
            name="beer_type"
            className="form-control"
            placeholder="Beer Type"
            type="text"
            // eslint-disable-next-line camelcase
            value={beer_type}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label className="description">Description</label>
          <input
            required
            name="description"
            className="form-control"
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
            name="brewery"
            className="form-control"
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
            name="location"
            className="form-control"
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
            name="rating"
            className="form-control"
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
