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
      'Diseñé y desarrollé un portal de autoservicio (SSP) para la gestión interna de personal, integrado mediante iframe. Implementé visualización y personalización de horarios, asignación de actividades y reservas de turnos, optimizando el control de personal. Desarrollé flujos de datos dinámicos con RxJS y un proveedor de tokens para comunicación segura, junto con servicios personalizados (popups, tooltips) y optimización de rendimiento mediante pipes y directivas personalizadas.',
    ]
  },
  {
    role: 'Desarrollador Full Sack, Tester',
    company: 'Tracklog',
    companyUrl: 'https://example.com',
    period: 'Ene 2020 - Dic 2023',
    description: [
      'Diseñé e implementé soluciones web de alto rendimiento, enfocadas en optimización de datos de prueba y eficiencia del sistema. Desarrollé interfaces responsivas con HTML, SASS, Java (Spring Boot) y Angular, integrando APIs RESTful en ASP.NET y C# para lograr una arquitectura full stack escalable y modular. Implementé procesamiento en tiempo real con Apache Kafka y generación de datos sintéticos con GenRocket. Apliqué pruebas automatizadas, validación funcional y buenas prácticas de seguridad (prevención de inyección SQL y XSS) para garantizar calidad, estabilidad y cumplimiento técnico.',
    ]
  },
  {
    role: 'Administrador de Bases de Datos',
    company: 'Tracklog',
    companyUrl: 'https://example.com',
    period: 'Sept 2017 - Dic 2019',
    description: [
      'Diseñé, implementé y optimicé bases de datos SQL Server, asegurando integridad, normalización y alto rendimiento mediante query tuning, indexación y ajustes de configuración. Desarrollé herramientas de gestión de datos y entornos de prueba para garantizar estabilidad, escalabilidad y calidad. Implementé estrategias de backup & restore, gestioné usuarios, permisos y políticas de seguridad, y apliqué monitoreo proactivo y mantenimiento preventivo, reduciendo tiempos de inactividad y protegiendo datos sensibles. Colaboré con IT para mejorar la infraestructura y resolver incidencias de manera ágil.',
    ]
  },
  {
    role: 'Coordinador de Proyectos',
    company: 'Sider Perú',
    companyUrl: 'https://example.com',
    period: 'Mar 2016 - Sept 2017',
    description: [
      'Fortalecí la alianza entre escuelas públicas y SiderPerú. Planifiqué, ejecuté y di seguimiento a iniciativas para generar impacto comunitario, alineando áreas funcionales y gestionando equipos de trabajo. Elaboré y entregué informes financieros y KPIs, y supervisé el desarrollo de proyectos educativos con alumnos del Technical School de SiderPerú.',
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
            <div className="experience-date">
            <p className="experience-period">{exp.period}</p>
            </div>
            <div className="experience-content">
              <div className="experience-header">
              <h3>
                {exp.role}{' '}
                <span>· <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">{exp.company}</a></span>
              </h3>
              
            </div>
            <p className="experience-description">{exp.description}</p>
            </div>
            
          </div>
        ))}
      </div>

      <div className="cv-button-wrapper">
        <a href="/src/assets/files/SamuelDiazResume.pdf" download className="cv-button">Ver Resume completo</a>
      </div>
    </section>
  )
}
