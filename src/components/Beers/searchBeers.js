import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import { Redirect } from 'react-router'

import { searchBeers } from '../../api/beer'
import messages from '../AutoDismissAlert/messages'

class SearchBeers extends Component {
  constructor () {
    super()

    this.state = {
      search: '',
      beers: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onBeerSearch = event => {
    event.preventDefault()
    const { search } = this.state
    const { alert, user } = this.props
    searchBeers(user, search)
      .then(response => this.setState({ beers: console.log(response.data.records), search: '' }))
      .then(() => {
        console.log(this.state.beer)
      })
    //   .then(() => {
    //     if (!this.state.beers || this.state.beers.length === 0) {
    //       alert({
    //         heading: 'Beer Found',
    //         message: messages.searchBeerFailure,
    //         variant: 'danger'
    //       })
    //     }
    //   })
      .catch(error => {
        console.error(error)
        this.setState({ name: '', beer_type: '', description: '', brewery: '', location: '', rating: '' })
        alert({
          heading: 'Cannot Find Beer',
          message: messages.searchBeerFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    if (!this.state.beers || this.state.beers.length < 1) {
      return (
        <div className="beer-search">
          <form className="beer-search-form" onSubmit={this.onBeerSearch}>
            <h3 className="beer-finder">Find Your Beer</h3>
            <input
              required
              className="beer-search-input"
              type="text"
              name="search"
              placeholder="Name of Beer"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </form>
        </div>
      )
    }

    return (
      <div className="beer-search">
        <form className="beer-search-form" onSubmit={this.onBeerSearch}>
          <h3 className="beer-finder">Find Your Beer</h3>
          <input
            required
            className="beer-search-input"
            type="text"
            name="search"
            placeholder="Name of Beer"
            value={this.state.search}
            onChange={this.handleChange}
          />
        </form>
        <div>
          <h2>HIII</h2>
        </div>
        <div className="beer-information">
          {this.state.beers.map(beer => {
            return (
              <div key={beer.fields.id} className="search-beer-information">
                <h2>{beer.fields.name}</h2>
                <h3>{beer.fields.cat_name}</h3>
                <p>Description: {beer.fields.descript}</p>
                <p>Brewery: {beer.fields.name_breweries}</p>
                <p>Location: {beer.fields.state}, {beer.fields.country}</p>
                <p>ABV: {beer.fields.abv}%</p>
              </div>
            )
          })}
        </div>
        <h3>BLAHHHH</h3>
      </div>
    )
  }
}

export default withRouter(SearchBeers)
