/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable global-require */

/* global sndMusic dispatch Koji */

import React, { Component } from 'react'
import Dispatch, { DISPATCH_EVENT } from '@withkoji/dispatch'

const { p5 } = window

class GameContainer extends Component {
  componentDidMount() {
    require('script-loader!app/index.js')

    // Game Beginning and Game Screen
    require('script-loader!app/game.js')
    require('script-loader!app/not-game.js')

    // Game Components
    require('script-loader!app/components/object.js')

    // Library
    require('script-loader!app/lib/clickable.js')
    require('script-loader!app/lib/easingFunctions.js')
    require('script-loader!app/lib/buttons.js')
    require('script-loader!app/lib/collisions.js')
    require('script-loader!app/lib/utilities.js')
    require('script-loader!app/lib/spawn.js')
    require('script-loader!app/lib/entities.js')

    let roomName = Koji.config.strings.defaultRoomName
    if (localStorage.getItem('roomName')) {
      roomName = localStorage.getItem('roomName')
    }

    let _playerName = Koji.config.strings.defaultPlayerName
    if (localStorage.getItem('playerName')) {
      _playerName = localStorage.getItem('playerName')
    }

    // eslint-disable-next-line no-global-assign
    dispatch = new Dispatch({
      // projectId: Koji.config.metadata.projectId,
      options: {
        shardName:
          roomName.toLowerCase() || Koji.config.strings.defaultRoomName, // the name of the shard you want to connect to. if this key is not present, the user will automatically be placed onto a shard
        maxConnectionsPerShard: parseInt(
          Koji.config.strings.maxPlayersPerShard
        ), // specify how many users to allow on a shard before it is "full" -- once a shard is full, new users will be added to a new shard unless a different shard is explicity set
      },
    })

    // eslint-disable-next-line no-global-assign
    dispatchEvent = DISPATCH_EVENT

    dispatch.setUserInfo({ playerName: _playerName })

    // eslint-disable-next-line new-cap
    this.p5Game = new p5(null, document.getElementById('game-container'))
  }

  componentWillUnmount() {
    if (sndMusic && sndMusic.isPlaying()) {
      sndMusic.dispose()
    }

    this.p5Game.remove()
  }

  render() {
    return <div id="game-container" />
  }
}

export default GameContainer
