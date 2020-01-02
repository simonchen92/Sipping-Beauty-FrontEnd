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
      empty: false,
      results: []
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
      .then(response => {
        if (response.data.records.length < 1) {
          this.setState({ search: '', empty: true })
        } else {
          this.setState({ results: response.data.records, search: '', empty: false })
        }
      })
      .catch(error => {
        console.error(error)
        this.setState({ search: '' })
        alert({
          heading: 'Cannot Find Beer',
          message: messages.searchBeerFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { results, search, empty } = this.state

    if (empty) {
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
              value={search}
              onChange={this.handleChange}
            />
          </form>
        </div>
      )
    } else {
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
              value={search}
              onChange={this.handleChange}
            />
          </form>
          <div className="beer-information">
            {results.map(beer => {
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
        </div>
      )
    }
  }
}

export default withRouter(SearchBeers)
