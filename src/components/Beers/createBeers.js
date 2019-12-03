import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'

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
      .then(response => this.setState({
        created: true,
        beer: { ...response.data.beer }
      }))
      .then(() => alert(messages.createBeerSuccess), 'success')
      .catch(() => {
        this.setState({ beer: { ...beer, name: '', beerType: '', description: '', brewery: '', location: '', rating: '' } })
        alert(messages.createBeerFailure, 'danger')
      })
  }

  handleChange = event => {
    const inputName = event.target.name
    const updatedInputValue = event.target.value
    const updatedBeer = { ...this.state.beer, [inputName]: updatedInputValue }
    console.log(updatedBeer)
    this.setState({ beer: updatedBeer })
  }

  render () {
    const { created, message } = this.state

    if (created) {
      return <Redirect to={'/beers'} />
    }

    // eslint-disable-next-line camelcase
    const { name, beerType, description, brewery, location, rating } = this.state.beer

    return (
      <BeerForm
        name={name}
        // eslint-disable-next-line camelcase
        beer_type={beerType}
        description={description}
        brewery={brewery}
        address={location}
        rating={rating}
        message={message}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    )
  }
}

export default withRouter(CreateBeers)
