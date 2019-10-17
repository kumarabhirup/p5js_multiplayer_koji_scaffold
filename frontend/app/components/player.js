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
*/

class Player extends GameObject {
  id = this.settings.id

  playerLabel = this.settings.playerName

  moveDir = createVector(0, 0)

  velocity = createVector(0, 0)

  maxVelocity = 5

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
    this.velocity.x = Smooth(
      this.velocity.x,
      this.moveDir.x * this.maxVelocity,
      6
    )

    this.velocity.y = Smooth(
      this.velocity.y,
      this.moveDir.y * this.maxVelocity,
      6
    )

    this.body.position.add(this.velocity)
  }
}
