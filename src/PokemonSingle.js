import React, { Component } from 'react'

class PokemonSingle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      pokemon: {}
    }

    this.fetchUserData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonName !== this.props.match.params.pokemonName) {
      this.fetchUserData()
    }
  }

  fetchUserData = (props) => {
    const { params } = this.props.match
    fetch(`http://pokeapi.salestock.net/api/v2/pokemon/${params.pokemonName}`)
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemon }))
  }

  render() {
    const { pokemon } = this.state

    return (
      <div className="PokemonUser">
        <h3>{pokemon.name}</h3>
        <img className="PokemonImg" src = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
      </div>
    )
  }
}

export default PokemonSingle