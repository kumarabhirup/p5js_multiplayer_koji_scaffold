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
*/

class Player extends GameObject {
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
}
