import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import { Redirect } from 'react-router'

import { searchBeers, addBeer } from '../../api/beer'
import messages from '../AutoDismissAlert/messages'

// Styling
import { SearchBeerWrapper } from '../../styling/SearchBeerWrapper'
import { SearchBar } from '../../styling/SearchBar'

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
          alert({
            heading: 'Cannot Find Beer',
            message: messages.searchBeerFailure,
            variant: 'danger'
          })
        } else {
          this.setState({ results: response.data.records, search: '', empty: false })
        }
      })
      .catch(error => {
        console.error(error)
        this.setState({ search: '' })
      })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { alert, user } = this.props
    const beerObj = this.state.results[Number(event.target.value)]

    const addedBeer = {
      name: beerObj.fields.name,
      beer_type: beerObj.fields.style_name,
      description: beerObj.fields.descript,
      brewery: beerObj.fields.name_breweries,
      location: `${beerObj.fields.state}, ${beerObj.fields.country}`,
      rating: beerObj.fields.abv
    }

    addBeer(addedBeer, user)
      .then(() => alert({
        message: messages.addedBeerSuccess,
        variant: 'success'
      }))
      .catch(error => {
        console.log(error)
        alert({
          message: messages.addedBeerFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { results, search, empty } = this.state

    if (empty) {
      return (
        <SearchBar>
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
        </SearchBar>
      )
    } else {
      return (
        <SearchBar>
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
              {results.map((beer, index) => {
                return (
                  <div key={beer.fields.id} className="search-beer-information">
                    <SearchBeerWrapper>
                      <h2>{beer.fields.name}</h2>
                      <h4>{beer.fields.style_name}</h4>
                      <p>Description: {beer.fields.descript}</p>
                      <p>Brewery: {beer.fields.name_breweries}</p>
                      <p>Location: {beer.fields.state}, {beer.fields.country}</p>
                      <p>ABV: {beer.fields.abv}%</p>
                      <div className="beer-button">
                        <button className="btn-danger add-beer" onClick={this.handleSubmit} value={index} name="beer">Add Beer</button>
                      </div>
                    </SearchBeerWrapper>
                  </div>
                )
              })}
            </div>
          </div>
        </SearchBar>
      )
    }
  }
}

export default withRouter(SearchBeers)
