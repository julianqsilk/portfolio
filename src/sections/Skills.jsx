function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <p className="section-label">HERRAMIENTAS</p>
        <h2>Skills</h2>
        <p>
          Herramientas y tecnologías que utilizo para desarrollar mis proyectos.
        </p>
      </div>

      <div className="skills-grid">

        <div className="skill-category">
          <h3>Video</h3>

          <div className="skill-list">
            <span>Adobe Premiere Pro</span>
            <span>Adobe After Effects</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Diseño</h3>

          <div className="skill-list">
            <span>Adobe Photoshop</span>
            <span>Aseprite</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Audio</h3>

          <div className="skill-list">
            <span>Adobe Audition</span>
            <span>FL Studio</span>
            <span>Cubase</span>
            <span>Pro Tools</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Desarrollo</h3>

          <div className="skill-list">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills