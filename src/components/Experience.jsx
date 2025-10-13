import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
  {
    role: 'Desarrollador Full Sack',
    company: 'Honest Greens',
    companyUrl: 'https://example.com',
    period: 'Jun 2024 - Ago 2025',
    description: [
      'Diseño y desarrollo de un portal de autoservicio (SSP) orientado a la gestión interna de personal. Creación de una aplicación embebida en iframe para distintos departamentos, que permite la visualización y personalización de horarios, asignación de actividades, reserva de turnos y otras acciones que optimizan el control de personal. Diseño e implementación del flujo de datos desde múltiples fuentes mediante un proveedor de tokens y RxJs, garantizando una comunicación eficiente y segura. Servicio personalizado para gestión de popups y tooltips. Rendimiento mejorado con pipes y directivas personalizadas, reduciendo enlaces y suscripciones observables.  Desarrollé herramientas de gestión de datos y entornos de prueba, garantizando la estabilidad y escalabilidad del sistema.',
    ]
  },
  {
    role: 'Desarrollador Full Sack, Tester',
    company: 'Tracklog',
    companyUrl: 'https://example.com',
    period: 'Enero 2022 - Presente',
    description: [
      'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'Tech Company',
    companyUrl: 'https://example.com',
    period: 'Enero 2022 - Presente',
    description: [
      'Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.',
    ]
  },
  {
    role: 'Web Designer',
    company: 'Creative Studio',
    companyUrl: 'https://example.com',
    period: 'Junio 2020 - Diciembre 2021',
    description: [
      'Diseñé experiencias visuales atractivas.',
      'Implementé animaciones y microinteracciones.',
      'Trabajé con clientes internacionales.'
    ]
  }
]

export default function Experience() {
  const sectionRef = useRef(null)

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <h2 className="experience-title">Experiencia</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>
                {exp.role}{' '}
                <span>· <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">{exp.company}</a></span>
              </h3>
              <p className="experience-period">{exp.period}</p>
            </div>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="cv-button-wrapper">
        <a href="/cv.pdf" download className="cv-button">Ver Resume completo</a>
      </div>
    </section>
  )
}
