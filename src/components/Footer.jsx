import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
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
        <section id="projects" className="footer">
          <div className="footer-content">
            <p className="footerText">Diseñado en <b>Figma </b>y programado en <b>Visual Studio Code</b> por su servidor. Creado con <b>React.js</b> and <b>Scss</b>, implementado con <b>Vercel</b>. Todo el texto está con tipografía <b>Inter</b>.</p>
          </div>
        </section>
      )
}
