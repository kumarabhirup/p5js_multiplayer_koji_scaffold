/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react'

import GameContainer from './GameContainer'
import MainMenu from './MainMenu'
import Leaderboard from './Leaderboard'
import SetScore from './SetScore'
import CharacterPicker from './CharacterPicker'

export default class App extends Component {
  state = {
    score: 0,
    name: 'Enter your Name',
    view: 'mainMenu',
  }

  componentDidMount() {
    window.setAppView = view => {
      this.setState({ view })
    }

    window.setScore = score => {
      this.setState({ score })
    }

    window.setName = name => {
      this.setState({ name })
    }
  }

  render() {
    if (this.state.view === 'game') {
      return (
        <div>
          <GameContainer />
        </div>
      )
    }

    if (this.state.view === 'setScore') {
      return (
        <div>
          <SetScore score={this.state.score} name={this.state.name} />
        </div>
      )
    }

    if (this.state.view === 'leaderboard') {
      return (
        <div>
          <Leaderboard />
        </div>
      )
    }

    if (this.state.view === 'characterPicker') {
      return (
        <div>
          <CharacterPicker />
        </div>
      )
    }

    if (this.state.view === 'mainMenu') {
      return (
        <div>
          <MainMenu />
        </div>
      )
    }

    return null
  }
}
