import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import BeerForm from './beerForm'
import messages from '../AutoDismissAlert/messages'
import { createBeers } from '../../api/beer'

class CreateBeers extends Component {
  constructor () {
    super()

    this.state = {
      beer: {
        name: '',
        beerType: '',
        description: '',
        brewery: '',
        location: '',
        rating: ''
      },
      created: false,
      message: null
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const beer = this.state

    createBeers(this.props.user, { beer: beer })
      .then(() => alert(messages.createRestaurantSuccess), 'Success')
      .catch()
  }

  handleChange = event => {
    const inputName = event.target.name
    const updatedInputValue = event.target.value
    const updatedBeer = { ...this.state.beer, [inputName]: updatedInputValue }
    this.setState({ beer: updatedBeer })
  }

  render () {
    const { name, beerType, description, brewery, location, rating } = this.state.beer

    return (
      <BeerForm
        name={name}
        beerType={beerType}
        description={description}
        brewery={brewery}
        address={location}
        rating={rating}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

export default withRouter(CreateBeers)
