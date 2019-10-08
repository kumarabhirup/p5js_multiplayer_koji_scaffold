/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// This function runs when the Game Screen is ON
function gamePlay() {
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

  // Draw Timer! (Comment this blob of code if you don't want timer)
  if (Koji.config.strings.enableTimer) {
    gameTimer -= 1 / 60
    drawTimer()
  }

  // InGame UI
  removeEmptyEnemies()

  player.show()

  enemies.forEach(enemy => {
    enemy.show()
  })

  updateGameStatus()

  // Game messages
  for (let i = 0; i < gameMessages.length; i += 1) {
    gameMessages[i].goalPos.y = i * (gameMessages[i].size + objSize * 0.1)
    gameMessages[i].update()
    gameMessages[i].render()

    gameMessages[i].isFirst = i === 0
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
      lifeSize / 2 + lifeSize * i,
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
      txt += `${enemies[i].name}: ${enemies[i].score}\n`
    }

    scoreText = txt
  })()

  // console.log(enemies, users)

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
  text(scoreText, x, y * 1.2)
  pop()
}
