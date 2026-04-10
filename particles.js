// Casitas con personas flotantes para el hero
// Siluetas minimalistas inspiradas en fotografía de comunidades
class HeroHouses {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.houses = []
    this.resize()
    this.init()
    window.addEventListener('resize', () => { this.resize(); this.init() })
  }

  resize() {
    this.canvas.width = this.canvas.offsetWidth
    this.canvas.height = this.canvas.offsetHeight
  }

  init() {
    this.houses = []
    const isMobile = this.canvas.width < 768
    const speed = isMobile ? 0.08 : 0.15
    const count = isMobile ? 10 : 18

    for (let i = 0; i < count; i++) {
      const size = 10 + Math.random() * 18
      // Cada casa puede tener 0, 1 o 2 personas
      const personCount = Math.floor(Math.random() * 3)
      const persons = []
      for (let p = 0; p < personCount; p++) {
        persons.push({
          offsetX: (Math.random() - 0.5) * size * 0.6,
          // Persona parada en la base de la casa
          scale: 0.3 + Math.random() * 0.25
        })
      }

      this.houses.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: size,
        roofHeight: size * (0.5 + Math.random() * 0.3),
        opacity: 0.06 + Math.random() * 0.08,
        angle: (Math.random() - 0.5) * 0.08,
        angleSpeed: (Math.random() - 0.5) * 0.0003,
        persons: persons
      })
    }
    this.animate()
  }

  drawPerson(x, y, scale, opacity) {
    // Persona minimalista: cabeza circular + cuerpo línea + piernas
    const ctx = this.ctx
    const h = 12 * scale  // altura total
    ctx.strokeStyle = `rgba(26, 26, 26, ${opacity})`
    ctx.fillStyle = `rgba(26, 26, 26, ${opacity})`
    ctx.lineWidth = 1

    // Cabeza
    ctx.beginPath()
    ctx.arc(x, y - h, h * 0.22, 0, Math.PI * 2)
    ctx.fill()

    // Cuerpo
    ctx.beginPath()
    ctx.moveTo(x, y - h + h * 0.22)
    ctx.lineTo(x, y - h * 0.35)
    ctx.stroke()

    // Piernas
    ctx.beginPath()
    ctx.moveTo(x, y - h * 0.35)
    ctx.lineTo(x - h * 0.2, y)
    ctx.moveTo(x, y - h * 0.35)
    ctx.lineTo(x + h * 0.2, y)
    ctx.stroke()

    // Brazos
    ctx.beginPath()
    ctx.moveTo(x, y - h * 0.6)
    ctx.lineTo(x - h * 0.25, y - h * 0.4)
    ctx.moveTo(x, y - h * 0.6)
    ctx.lineTo(x + h * 0.25, y - h * 0.4)
    ctx.stroke()
  }

  drawHouse(h) {
    const ctx = this.ctx
    const w = h.size
    const bodyH = h.size * 0.8
    const roofH = h.roofHeight

    ctx.save()
    ctx.translate(h.x, h.y)
    ctx.rotate(h.angle)
    ctx.strokeStyle = `rgba(26, 26, 26, ${h.opacity})`
    ctx.lineWidth = 1
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'

    // Cuerpo
    ctx.beginPath()
    ctx.rect(-w / 2, 0, w, bodyH)
    ctx.stroke()

    // Techo
    ctx.beginPath()
    ctx.moveTo(-w / 2 - 2, 0)
    ctx.lineTo(0, -roofH)
    ctx.lineTo(w / 2 + 2, 0)
    ctx.closePath()
    ctx.stroke()

    // Personas dentro/cerca de la casa
    h.persons.forEach(p => {
      this.drawPerson(p.offsetX, bodyH, p.scale, h.opacity * 1.2)
    })

    ctx.restore()
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.houses.forEach(h => {
      h.x += h.vx
      h.y += h.vy
      h.angle += h.angleSpeed

      if (h.x < -20 || h.x > this.canvas.width + 20) h.vx *= -1
      if (h.y < -20 || h.y > this.canvas.height + 20) h.vy *= -1

      this.drawHouse(h)
    })

    requestAnimationFrame(() => this.animate())
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('hero-particles')
  if (canvas) new HeroHouses(canvas)
})
