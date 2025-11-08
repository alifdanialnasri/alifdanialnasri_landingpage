import './index.css'   // if index.css is in the same folder

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="content">
      <h1 class="name fade-in">Alif Danial Nasri</h1>
      <p class="message fade-in-delay">This website is under development.<br>Stay tuned — future updates coming soon!</p>
      <div class="loading-dots fade-in-delay-2">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
    </div>
    <footer class="footer fade-in-delay-3">
      <p>&copy; 2025 Alif Danial Nasri. All rights reserved.</p>
    </footer>
  </div>
`

createFloatingParticles()

function createFloatingParticles() {
  const container = document.querySelector('.container')
  const particleCount = 20

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div')
    particle.className = 'particle'
    particle.style.left = `${Math.random() * 100}%`
    particle.style.top = `${Math.random() * 100}%`
    particle.style.animationDelay = `${Math.random() * 5}s`
    particle.style.animationDuration = `${15 + Math.random() * 10}s`
    container.appendChild(particle)
  }
}
