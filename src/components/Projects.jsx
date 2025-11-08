import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    project: 'MKBar (MakeUp) Studio',
    projectUrl: 'https://github.com/samuelgiorno/MkbarStudio',
    imageUrl: '/mkbarstudio.jpg',
    description: [
      'Tienda online que ofrece una amplia gama de productos cosméticos y de belleza, incluye marcas de lujo, de farmacia y de parafarmacia, así como accesorios relacionados.'
    ]
  },
  {
    project: 'Smart Recipe',
    projectUrl: 'https://github.com/samuelgiorno/Final-Project-4Geeks',
    imageUrl: '/mkbarstudio.jpg',
    description: [
      'Proyecto Full Stack con integración de IA para generar recetas personalizadas, login, registro y dashboard con conexión a OpenAI GPT-4.'
    ]
  },
  {
    project: 'MKBar (MakeUp) Studio',
    projectUrl: 'https://github.com/samuelgiorno/MkbarStudio',
    imageUrl: '/mkbarstudio.jpg',
    description: [
      'Tienda online que ofrece una amplia gama de productos cosméticos y de belleza, incluye marcas de lujo, de farmacia y de parafarmacia, así como accesorios relacionados.'
    ]
  }
]

export default function Projects() {
  const sectionRef = useRef(null)

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <h2 className="projects-title">Proyectos</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div className="project-item" key={index}>
            <div className="project-image">
              <img src={proj.imageUrl} alt={proj.project} />
            </div>
            <div className="project-content">
              <h3 className="project-name">
                <a href={proj.projectUrl} target="_blank" rel="noopener noreferrer">
                  {proj.project}
                </a>
              </h3>
              <ul className="project-description">
                {proj.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
