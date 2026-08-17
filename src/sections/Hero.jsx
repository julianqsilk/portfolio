import { useEffect, useState } from 'react'
import a1 from '../assets/projects/detrasdecamara/a1.jpg'
import a2 from '../assets/projects/detrasdecamara/a2.jpg'
import a3 from '../assets/projects/detrasdecamara/a3.jpg'
import a4 from '../assets/projects/detrasdecamara/a4.jpg'
import a5 from '../assets/projects/detrasdecamara/a5.jpg'
import a6 from '../assets/projects/detrasdecamara/a6.jpg'
import a7 from '../assets/projects/detrasdecamara/a7.jpg'

const backstageImages = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7
]

function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backstageImages.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="inicio" className="hero">

      <div className="hero-content">
        <p className="hero-label">PORTFOLIO</p>

        <h1>Julián Quiroz</h1>

        <h2>Diseñador Multimedia · Técnico en Computación</h2>

        <p className="hero-description">
          Creo proyectos audiovisuales, piezas visuales y experiencias
          digitales combinando diseño, sonido y tecnología.
        </p>

        <a href="#proyectos" className="hero-button">
          Ver proyectos
        </a>
      </div>

      <div className="hero-showcase">
        <img
    key={currentImage}
    src={backstageImages[currentImage]}
    alt="Trabajos audiovisuales de Julián"
  />
      </div>

    </section>
  )
}

export default Hero