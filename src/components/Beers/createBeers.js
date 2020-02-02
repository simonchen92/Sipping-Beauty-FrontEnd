import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router'

import BeerForm from './beerForm'
import messages from '../AutoDismissAlert/messages'
import { createBeers } from '../../api/beer'

// Styling
import { BeerFormWrapper } from '../../styling/BeerFormWrapper'

class CreateBeers extends Component {
  constructor () {
    super()

    this.state = {
      beer: {
        name: '',
        beer_type: '',
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

    const { alert } = this.props
    const beer = this.state

    createBeers(this.props.user, { beer: beer.beer })
      .then(response => this.setState({
        created: true,
        beer: { ...response.data.beer }
      }))
      .then(() => alert({
        heading: 'Beer Creation Success',
        message: messages.createBeerSuccess,
        variant: 'success'
      }))
      .catch(() => {
        this.setState({ beer: { ...beer, name: '', beer_type: '', description: '', brewery: '', location: '', rating: '' } })
        alert({
          heading: 'Beer Creation Failure',
          message: messages.createBeerFailure,
          variant: 'danger'
        })
      })
  }

  handleChange = event => {
    const inputName = event.target.name
    const updatedInputValue = event.target.value
    const updatedBeer = { ...this.state.beer, [inputName]: updatedInputValue }
    this.setState({ beer: updatedBeer })
  }

  render () {
    const { created, message } = this.state

    if (created) {
      return <Redirect to={'/beers'} />
    }

    // eslint-disable-next-line camelcase
    const { name, beer_type, description, brewery, location, rating } = this.state.beer

    return (
      <BeerFormWrapper>
        <BeerForm
          name={name}
          // eslint-disable-next-line camelcase
          beer_type={beer_type}
          description={description}
          brewery={brewery}
          address={location}
          rating={rating}
          message={message}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </BeerFormWrapper>
    )
  }
}

export default withRouter(CreateBeers)
