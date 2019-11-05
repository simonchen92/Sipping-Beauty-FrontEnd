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
