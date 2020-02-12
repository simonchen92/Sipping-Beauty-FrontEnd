import styled from 'styled-components'

export const SearchBar = styled.div`
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1em;
    padding: 1em;
}
input {
    align-self: center;
    border-radius: .25rem;
    height: calc(1.5em + 0.75rem + 2px);
    padding: .5rem;
    width: 50vw;
}
h3 {
    color: white;
    font-family: 'Gloria Hallelujah', cursive;
    text-align: center;
}
`
