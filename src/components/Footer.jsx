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
            <p className="footerText">Loosely designed in <b>Figma </b>and coded in <b>Visual Studio Code</b> by</p>
            <p className="footerText">yours truly. Built with <b>Next.js</b> and <b>Tailwind CSS</b>, deployed with</p>
            <p className="footerText"><b>Vercel</b>. All text is set in the <b>Inter</b> typeface.</p>
          </div>
        </section>
      )
}