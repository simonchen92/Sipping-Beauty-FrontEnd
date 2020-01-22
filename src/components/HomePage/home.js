import React from 'react'
import styled from 'styled-components'

const HomePage = styled.div`
  font-family: 'Gloria Hallelujah', cursive;
  text-align: center;
  margin: 1em;
`

const Home = () => (
  <HomePage>
    <div className="home-page">
      <h2>Welcome!</h2>
      <p>This is a beer application to search for information about your favorite beer</p>
    </div>
  </HomePage>
)

export default Home
