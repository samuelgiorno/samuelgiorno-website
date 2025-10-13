import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
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
    role: 'Frontend Developer',
    company: 'Tech Company',
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
    <section id="projects" className="experience-section" ref={sectionRef}>
      <h2 className="experience-title">Experiencia</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>
                {exp.role}{' '}
                <span>·<a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">{exp.company}</a></span>
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
