import { useState } from 'react'
import projects from '../data/projects'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selectedProject, setSelectedProject] = useState(null)

 const categories = [
  'Todos',
  ...new Set(projects.map((project) => project.category))
]

  const filteredProjects =
    activeCategory === 'Todos'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="proyectos" className="projects">

      <div className="section-header">
        <p className="section-label">TRABAJOS</p>

        <h2>Proyectos</h2>

        <p>
          Una selección de trabajos audiovisuales, visuales y sonoros.
        </p>
      </div>

      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article
            className="project-card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-image">
  {project.image ? (
    <img src={project.image} alt={project.title} />
  ) : (
    <span>{project.category}</span>
  )}

  <div className="project-overlay">
    <span>Ver proyecto →</span>
  </div>
</div>

            <div className="project-info">
              <p className="project-category">
                {project.category} · {project.year}
              </p>

              <h3>{project.title}</h3>

              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="project-modal"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <div className="project-modal-image">
              {selectedProject.image ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                />
              ) : (
                <span>{selectedProject.category}</span>
              )}
            </div>

            <div className="project-modal-info">
              <p className="project-category">
                {selectedProject.category} · {selectedProject.year}
              </p>

              <h2>{selectedProject.title}</h2>

              <p>{selectedProject.description}</p>

{selectedProject.role && (
  <div className="project-role">
    <strong>Mi aporte</strong>
    <p>{selectedProject.role}</p>
  </div>
)}

{selectedProject.type === 'video' && (
  <div className="project-media">
    {selectedProject.video ? (
      <iframe
        src={selectedProject.video}
        title={selectedProject.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <div className="media-placeholder">
        Video del proyecto
      </div>
    )}
  </div>
)}

{selectedProject.type === 'audio' && (
  <div className="project-media">
    {selectedProject.audio ? (
      <audio controls src={selectedProject.audio} />
    ) : (
      <div className="media-placeholder">
        Audio del proyecto
      </div>
    )}
  </div>
)}

{selectedProject.type === 'gallery' && (
  <div className="project-gallery">
    {selectedProject.gallery?.length > 0 ? (
      selectedProject.gallery.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${selectedProject.title} ${index + 1}`}
        />
      ))
    ) : (
      <div className="media-placeholder">
        Galería del proyecto
      </div>
    )}
  </div>
)}

              <div className="project-tools">
                {selectedProject.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}

export default Projects