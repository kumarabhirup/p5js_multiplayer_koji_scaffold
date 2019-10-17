/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// This function runs when the Game Screen is ON
function gamePlay() {
  // Draw game border
  push()
  strokeWeight(objSize * 0.5)
  stroke(Koji.config.colors.gameBorderColor)
  noFill()
  rect(-arenaSize / 2, -arenaSize / 2, arenaSize, arenaSize)
  pop()

  // Floating Text effects
  for (let i = 0; i < floatingTexts.length; i += 1) {
    floatingTexts[i].update()
    floatingTexts[i].render()
  }

  // Particle effects
  for (let i = 0; i < particles.length; i += 1) {
    if (particles[i]) {
      particles[i].render()
      particles[i].update()
    }
  }

  if (emojiCooldown > 0) {
    emojiCooldown -= 1 / frameRate()
  }

  if (touching) {
    touchCurrentX = camera.mouseX
    touchCurrentY = camera.mouseY
  }

  // InGame UI
  removeEmptyEnemies()

  camera.on()

  player.show()
  player.move()
  player.showPlayerName()

  enemies.forEach(enemy => {
    enemy.show()
    enemy.showPlayerName()
  })

  if (cameraTarget) {
    camera.position.x = Smooth(
      camera.position.x,
      cameraTarget.body.position.x,
      8
    )
    camera.position.y = Smooth(
      camera.position.y,
      cameraTarget.body.position.y,
      8
    )
  }

  camera.off()

  updateGameStatus()

  // Game messages
  for (let i = 0; i < gameMessages.length; i += 1) {
    gameMessages[i].goalPos.y = i * (gameMessages[i].size + objSize * 0.1)
    gameMessages[i].update()
    gameMessages[i].render()

    gameMessages[i].isFirst = i === 0
  }

  for (let i = 0; i < emojis.length; i += 1) {
    emojis[i].update()
    emojis[i].render()
  }

  // Draw Timer! (Comment this blob of code if you don't want timer)
  if (Koji.config.strings.enableTimer) {
    gameTimer -= 1 / 60
    drawTimer()
  }

  // Score draw
  const scoreX = width - objSize / 2
  const scoreY = objSize / 3
  textSize(objSize * 2)
  fill(Koji.config.colors.scoreColor)
  textAlign(RIGHT, TOP)
  text(score, scoreX, scoreY)

  // Lives draw
  const lifeSize = objSize
  for (let i = 0; i < lives; i += 1) {
    image(
      imgLife,
      lifeSize / 2 + lifeSize * i * 1.05,
      lifeSize / 2,
      lifeSize,
      lifeSize
    )
  }

  cleanup()
}

function updateGameStatus() {
  let scoreText
  const numOfPlayers = Object.keys(users).length

  if (numOfPlayers <= 1) {
    loadingAnimationTimer += 1 / 60

    if (loadingAnimationTimer > 1) {
      loadingAnimationTimer = 0
    }

    gameStatusText = `Invite people to '${roomName}' room`

    // dot-dot animation
    if (loadingAnimationTimer > 0.3) {
      gameStatusText += '.'
    }

    if (loadingAnimationTimer > 0.6) {
      gameStatusText += '.'
    }

    if (loadingAnimationTimer > 0.9) {
      gameStatusText += '.'
    }
  } else {
    gameStatusText = `Game Room: ${roomName}`
  }

  const txtSize = objSize * 0.5
  const x = width - objSize / 2
  const y = (objSize / 3) * 7

  // Player Score Texts
  ;(() => {
    let txt = ''

    for (let i = 0; i < enemies.length; i += 1) {
      if (enemies[i].name) {
        txt += `${enemies[i].name}: ${enemies[i].score} / ${startingLives -
          enemies[i].lives}\n`
      }
    }

    scoreText = txt
  })()

  push()
  textSize(txtSize)
  fill(Koji.config.colors.scoreColor)
  textAlign(RIGHT, TOP)
  text(gameStatusText, x, y)
  pop()

  push()
  textSize(txtSize)
  fill(Koji.config.colors.negativeFloatingTextColor)
  textAlign(RIGHT, TOP)
  text(scoreText, x, y * 1.3)
  pop()
}
