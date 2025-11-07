import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const sectionRef = useRef(null)

    useEffect(() => {

        if (!sectionRef.current) return

        gsap.from(sectionRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            }
        })
    }, [])

    return (
        <section id="hero" className="hero">
          <div className="hero-content">
            <p className="eyebrow">Soy <spam className="group-hover">Desarrollador Full Stack</spam>, <spam className="group-hover">Administrador de Bases de Datos (DBA)</spam> e <spam className="group-hover">Ingeniero Químico</spam>, actualmente en busca de nuevos desafíos y equipos con la misión de revolucionar la forma en que el mundo contrata gracias a la inteligencia artificial (IA).</p>
            <p className="eyebrow">Me apasiona resolver problemas y aplicar el pensamiento desde los primeros principios, siempre impulsado por un propósito y motivado por el reto de encontrar soluciones. Tengo una sólida base en <spam className="group-hover">JavaScript</spam>, <spam className="group-hover">Node.js</spam>, <spam className="group-hover">MongoDB</spam>, <spam className="group-hover">React</spam>, <spam className="group-hover">Next.js</spam>, <spam className="group-hover">SQL</spam>, <spam className="group-hover">Java</spam> y <spam className="group-hover">Python</spam>. He liderado equipos técnicos diversos abarcando Frontend, Backend y DevOps, construyendo productos escalables desde cero con el compromiso de generar un impacto positivo a través de la tecnología.</p>
            <p className="eyebrow">Soy un explorador de nuevas tecnologías, un aprendiz constante y un solucionador de problemas de corazón. Cuando no estoy programando, probablemente me encuentres viendo videos sobre tecnología en YouTube, alimentando mi curiosidad.</p>
            <p className="eyebrow">No dudes en conectarte conmigo <spam className="group-hover">samuelgiorno@gmail.com</spam> para hablar de tecnología…</p>
            <p className="eyebrow"><b>Construyamos juntos el futuro de la tecnología.</b></p>
          </div>
        </section>
      )
}