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
        this.setState({ name: '', beerType: '', description: '', brewery: '', location: '', rating: '' })
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
          {/* {beers.map((beer) => (
            <ShowBeers key={beer.id}>
            </ShowBeers>
          ))} */}
        </div>
      </div>
    )
  }
}

export default withRouter(ShowBeers)
