function Contact() {
  return (
    <section id="contacto" className="contact">

      <div className="section-header">
        <p className="section-label">CONTACTO</p>

        <h2>¿Trabajamos juntos?</h2>

        <p>
          Si querés conocer más sobre mi trabajo
          o tenés un proyecto en mente, podés contactarme.
        </p>
      </div>

      <div className="contact-links">

        <a
          href="mailto:julianquiroz98@gmail.com"
          className="contact-link"
        >
          <span className="contact-label">Email</span>
          <span className="contact-value">
            julianquiroz98@gmail.com
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/julián-q-946847213"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">
            Ver perfil →
          </span>
        </a>

        <a
          href="https://github.com/julianqsilk"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-label">GitHub</span>
          <span className="contact-value">
            Ver perfil →
          </span>
        </a>

      </div>

    </section>
  )
}

export default Contact