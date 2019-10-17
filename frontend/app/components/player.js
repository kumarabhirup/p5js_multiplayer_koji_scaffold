/* eslint-disable no-unused-vars */

/* 
  global
  Koji
  dispatch
  GameObject
  push
  pop
  text
  textAlign
  CENTER
  textSize
  fill
  noStroke
  createVector
  Smooth
  constrain
  arenaSize
  isMobile
  touching
  p5
  camera
*/

class Player extends GameObject {
  id = this.settings.id

  playerLabel = this.settings.playerName

  showPlayerName = () => {
    push()
    fill(Koji.config.colors.negativeFloatingTextColor)
    noStroke()
    textSize(12.5)
    textAlign(CENTER, CENTER)
    text(
      this.playerLabel,
      this.body.position.x,
      this.body.position.y - this.sizing.radius - 8
    )
    pop()
  }

  update() {
    this.move()

    // Don't let the player run out
    this.body.position.x = constrain(
      this.body.position.x,
      -arenaSize / 2,
      arenaSize / 2
    )
    this.body.position.y = constrain(
      this.body.position.y,
      -arenaSize / 2,
      arenaSize / 2
    )
  }
}
