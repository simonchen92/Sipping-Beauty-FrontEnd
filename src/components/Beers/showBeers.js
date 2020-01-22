import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { showBeers, deleteBeer } from '../../api/beer'
import messages from '../AutoDismissAlert/messages'
import styled from 'styled-components'

// Styling for beers section
const BeerWrapper = styled.div`
  .beer-selection {
    display: grid;
    border: 1px solid black;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    font-family: 'Gloria Hallelujah', cursive;
    margin: 1em;
    padding: 1em;
  }
`

const Header = styled.div`
  display: grid;
  justify-items: center;
  margin: 1em;
  font-size: 2em;
  font-weight: bold;
`

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

  handleDelete = id => {
    const user = this.props.user
    const { alert } = this.props

    deleteBeer(user, id)
      .then(() => this.componentDidMount())
      .then(() => alert({
        message: messages.deleteBeerSuccess,
        variant: 'success'
      }))
      .catch(error => {
        console.error(error)
        alert({
          message: messages.failure,
          variant: 'danger'
        })
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
        <Header>
          <div className="my-beers">My Beers</div>
        </Header>
        <BeerWrapper>
          <div className="beer-container">
            {beers.map((beer, index) => (
              <div className="beer-selection" key={beer.id}>
                <p>Name: {beer.name}</p>
                <p>Beer Type: {beer.beer_type}</p>
                <p>Description: {beer.description}</p>
                <p>Brewery: {beer.brewery}</p>
                <p>Location: {beer.location}</p>
                <p>ABV: {beer.rating}%</p>
                <div className="delete-button">
                  <button className="btn-danger delete-beer" value={index} onClick={() => this.handleDelete(beer.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </BeerWrapper>
      </div>
    )
  }
}

export default withRouter(ShowBeers)
