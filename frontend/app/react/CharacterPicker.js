/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react'
import Koji from '@withkoji/vcc'

import { getFontFamily } from './MainMenu'

let images = []

class CharacterPicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chosenImageLink: '',
      chosenImageIndex: '',
      images: [],
      font: 'Arial',
    }

    this.updateChosenImage = this.updateChosenImage.bind(this)
  }

  componentDidMount() {
    images = []

    for (let i = 0; i < Koji.config.images.player.length; i += 1) {
      images[i] = Koji.config.images.player[i]
    }

    let _chosenImageIndex = 0
    if (localStorage.getItem('chosenImageIndex')) {
      _chosenImageIndex = localStorage.getItem('chosenImageIndex')
    }

    this.setState({
      chosenImageIndex: _chosenImageIndex,
      images,
    })

    this.updateChosenImage()

    // Load the font
    const link = document.createElement('link')
    link.href = Koji.config.strings.fontFamily
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    let newFont = getFontFamily(Koji.config.strings.fontFamily)
    const newStr = newFont.replace('+', ' ')
    newFont = newStr

    this.setState({ font: newFont })

    document.body.style.fontFamily = newFont
  }

  backToMainMenu = () => {
    window.setAppView('mainMenu')
  }

  updateChosenImage() {
    const id = this.state.chosenImageIndex
    this.setState({ chosenImageLink: images[id] })

    localStorage.setItem('chosenImageLink', images[id])
  }

  handleSubmit() {
    this.startGame()
  }

  render() {
    const chosenID = this.state.chosenImageIndex

    return (
      <div
        id="picker-menu"
        style={{
          backgroundColor: Koji.config.colors.backgroundColor,
          color: Koji.config.colors.titleColor,
        }}
      >
        <div
          className=""
          style={{
            color: Koji.config.colors.titleColor,
            fontSize: '5vmin',
            margin: '1vmin',
          }}
        >
          Choose your character:
        </div>

        <div className="picker-thumb-container">
          {this.state.images.map((thumb, index) => (
            <button
              key={index}
              type="button"
              className="picker-thumb"
              style={{
                backgroundColor: `${Koji.config.colors.backgroundColor}`,
                borderColor: `${Koji.config.colors.buttonColor}`,
                opacity: chosenID === index ? 1 : 0.5,
              }}
              onClick={() => {
                this.setState({ chosenImageIndex: index })
                localStorage.setItem('chosenImageIndex', index)
                this.updateChosenImage()
              }}
            >
              <img src={thumb} className="picker-img" alt="Player Thumbnail" />
            </button>
          ))}
        </div>

        <button
          className="dismiss-button"
          type="button"
          onClick={this.backToMainMenu}
          style={{
            backgroundColor: Koji.config.colors.buttonColor,
            color: Koji.config.colors.buttonTextColor,
            fontFamily: `${this.state.font}`,
          }}
        >
          Back
        </button>
      </div>
    )
  }
}

export default CharacterPicker
