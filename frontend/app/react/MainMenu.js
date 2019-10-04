/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable global-require */

/* global Koji */

import React, { Component } from 'react'

class MainMenu extends Component {
  constructor(props) {
    super(props)

    this.startGame = this.startGame.bind(this)

    this.state = {
      font: 'Arial',
      playerName: Koji.config.strings.defaultPlayerName,
      roomName: Koji.config.strings.defaultRoomName,
    }
  }

  componentDidMount() {
    function getFontFamily(ff) {
      const start = ff.indexOf('family=')
      if (start === -1) return 'sans-serif'
      let end = ff.indexOf('&', start)
      if (end === -1) end = undefined
      return ff.slice(start + 7, end)
    }

    const link = document.createElement('link')
    link.href = Koji.config.strings.fontFamily
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    let newFont = getFontFamily(Koji.config.strings.fontFamily)
    const newStr = newFont.replace('+', ' ')
    newFont = newStr

    this.setState({ font: newFont })
    document.body.style.fontFamily = newFont

    try {
      document.getElementById('p5_loading').style.display = 'none'
    } catch (error) {
      //
    }

    let roomName = Koji.config.strings.defaultRoomName
    if (localStorage.getItem('roomName')) {
      roomName = localStorage.getItem('roomName')
    }

    let _playerName = Koji.config.strings.defaultPlayerName
    if (localStorage.getItem('playerName')) {
      _playerName = localStorage.getItem('playerName')
    }

    this.setState({
      roomName,
      playerName: _playerName,
    })
  }

  componentWillUnmount() {}

  openLeaderboard = () => {
    window.setAppView('leaderboard')
  }

  openCharacterPicker = () => {
    window.setAppView('characterPicker')
  }

  startGame() {
    localStorage.setItem('roomName', this.state.roomName)
    localStorage.setItem('playerName', this.state.playerName)

    window.setAppView('game')
  }

  handleSubmit() {
    this.startGame()
  }

  render() {
    return (
      <div
        id="main-menu"
        style={{
          backgroundColor: Koji.config.colors.backgroundColor,
          color: Koji.config.colors.titleColor,
        }}
      >
        <div>
          <div
            className="title"
            style={{ color: Koji.config.colors.titleColor }}
          >
            {Koji.config.strings.title}
          </div>

          <div>
            <div
              className="instructions"
              style={{ color: Koji.config.colors.instructionsColor }}
            >
              {Koji.config.strings.instructions1}
            </div>
            <div
              className="instructions"
              style={{ color: Koji.config.colors.instructionsColor }}
            >
              {Koji.config.strings.instructions2}
            </div>
            <div
              className="instructions"
              style={{ color: Koji.config.colors.instructionsColor }}
            >
              {Koji.config.strings.instructions3}
            </div>
          </div>
        </div>

        <form className="main-menu-form" onSubmit={this.handleSubmit}>
          <div className="main-menu-input-wrapper">
            <div className="main-menu-field">
              <label
                className="main-menu-input-label"
                style={{ color: Koji.config.colors.instructionsColor }}
              >
                Name
              </label>
              <input
                onChange={event => {
                  this.setState({ playerName: event.target.value })
                  localStorage.setItem('playerName', event.target.value)
                }}
                type="text"
                value={this.state.playerName}
                style={{
                  backgroundColor: Koji.config.colors.buttonColor,
                  color: Koji.config.colors.buttonTextColor,
                  borderColor: Koji.config.colors.titleColor,
                  fontFamily: `${this.state.font}`,
                }}
                className="main-menu-input"
              />
            </div>

            <div className="main-menu-field">
              <label
                className="main-menu-input-label"
                style={{ color: Koji.config.colors.instructionsColor }}
              >
                Game Room
              </label>
              <input
                onChange={event => {
                  this.setState({ roomName: event.target.value })
                  localStorage.setItem('roomName', event.target.value)
                }}
                type="text"
                value={this.state.roomName}
                style={{
                  backgroundColor: Koji.config.colors.buttonColor,
                  color: Koji.config.colors.buttonTextColor,
                  borderColor: Koji.config.colors.titleColor,
                  fontFamily: `${this.state.font}`,
                }}
                className="main-menu-input"
              />
            </div>
          </div>

          <button
            className="main-menu-button"
            onClick={this.startGame}
            type="submit"
            style={{
              backgroundColor: Koji.config.colors.buttonColor,
              color: Koji.config.colors.buttonTextColor,
              fontFamily: `${this.state.font}`,
            }}
          >
            {Koji.config.strings.playButtonText}
          </button>
        </form>

        <button
          type="button"
          className="main-menu-button"
          onClick={this.openLeaderboard}
          style={{
            backgroundColor: Koji.config.colors.buttonColor,
            color: Koji.config.colors.buttonTextColor,
            fontFamily: `${this.state.font}`,
          }}
        >
          {Koji.config.strings.leaderboardButtonText}
        </button>
      </div>
    )
  }
}

export default MainMenu
