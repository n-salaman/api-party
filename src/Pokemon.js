import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Pokedex from 'pokeapi-js-wrapper'
import PokemonSingle from './PokemonSingle'

class Pokemon extends Component {
  state = {
    pokemonName: '',
  }

  handleChange = (ev) => {
    this.setState({ pokemonName: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/pokemon/${this.state.pokemonName}`)
  }

  render() {
    return (
      <div className="Pokemon">
        <img
          src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"
          alt="GitHub"
          className="logo"
        />

        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter a Pokemon"
              value={this.state.pokemonName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit">
              Look up Pokemon
            </button>
          </div>
        </form>

        <Route path="/pokemon/:pokemonName" component={PokemonSingle} />
      </div>
    )
  }
}

export default Pokemon