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
            <p className="eyebrow">I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>
            <p className="eyebrow">Currently, I'm a Senior Front-End Engineer at <spam className="group-hover">Klaviyo</spam>, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.</p>
            <p className="eyebrow">In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API.</p>
            <p className="eyebrow">In my spare time, I’m usually climbing, playing tennis, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds.</p>
          </div>
        </section>
      )
}