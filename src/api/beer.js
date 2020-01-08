import apiUrl from '../apiConfig'
import axios from 'axios'

export const showBeers = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/beers/',
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const createBeers = (user, beerData) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/beers/',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: beerData
  })
}

// Beer Search Using OpenBeerDB
export const searchBeers = (user, search) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/search-beer',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: { search }
  })
}

// // Adding Beer from Beer Search
// export const addBeer = (beer, user) => {
//   return axios({
//     method: 'POST',
//     url: apiUrl + '/beers',
//     headers: {
//       'Authorization': `Token token=${user.token}`
//     },
//     data: { beer }
//   })
// }
