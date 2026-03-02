// Partículas minimalistas para el hero
// Puntos grises flotando con líneas de conexión sutiles
class HeroParticles {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.particles = []
    this.resize()
    this.init()
    window.addEventListener('resize', () => { this.resize(); this.init() })
  }

  resize() {
    this.canvas.width = this.canvas.offsetWidth
    this.canvas.height = this.canvas.offsetHeight
  }

  init() {
    this.particles = []
    // Pocas partículas para que sea sutil
    const count = Math.floor((this.canvas.width * this.canvas.height) / 25000)
    for (let i = 0; i < Math.min(count, 20); i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 1.5 + Math.random() * 1.5,
        opacity: 0.15 + Math.random() * 0.2
      })
    }
    this.animate()
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    // Mover y dibujar partículas
    this.particles.forEach(p => {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1

      this.ctx.beginPath()
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      this.ctx.fillStyle = `rgba(232, 224, 218, ${p.opacity})`
      this.ctx.fill()
    })

    // Líneas entre partículas cercanas
    const maxDist = 150
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x
        const dy = this.particles[i].y - this.particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.08
          this.ctx.beginPath()
          this.ctx.strokeStyle = `rgba(232, 224, 218, ${opacity})`
          this.ctx.lineWidth = 0.5
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y)
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y)
          this.ctx.stroke()
        }
      }
    }

    requestAnimationFrame(() => this.animate())
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('hero-particles')
  if (canvas) new HeroParticles(canvas)
})
