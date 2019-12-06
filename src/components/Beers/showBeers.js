import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { showBeers } from '../../api/beer'

class ShowBeers extends Component {
  constructor () {
    super()

    this.state = {
      beers: [],
      messages: null
    }
  }

  componentDidMount () {
    showBeers(this.props.user)
      .then(response => this.setState({ beers: response.data.beers }))
      .catch(error => {
        console.error(error)
        this.setState({ name: '', beer_type: '', description: '', brewery: '', location: '', rating: '' })
      })
  }

  render () {
    const { beers } = this.state
    console.log(beers)

    if (!this.state.beers) {
      return <p>Loading...</p>
    }

    return (
      <div className="main-beer-container">
        <div className="my-beers">My Beers</div>
        <div className="beer-container">
          {beers.map((beer) => (
            <div className="beer-selection" key={beer.id}>
              <p>Name: {beer.name}</p>
              <p>Beer Type: {beer.beer_type}</p>
              <p>Description: {beer.description}</p>
              <p>Brewery: {beer.brewery}</p>
              <p>Location: {beer.location}</p>
              <p>ABV: {beer.rating}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(ShowBeers)
