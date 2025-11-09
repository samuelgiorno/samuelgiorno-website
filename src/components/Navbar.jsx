import { useEffect } from 'react'
import { gsap } from 'gsap'
import { FaGithub, FaLinkedin, FaInstagram, FaMailBulk, FaGoogle } from 'react-icons/fa';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { FiMail } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Navbar() {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll('.nav-links a'))
    const sections = Array.from(document.querySelectorAll('section'))
    const hrefToId = (href) => (href || '').replace(/^#/, '').toLowerCase()
    const handleClick = (e) => {
      e.preventDefault()
      const href = e.currentTarget.getAttribute('href')
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: href, offsetY: 0 },
        ease: 'power2.out'
      })
    }
    links.forEach(link => link.addEventListener('click', handleClick))

    let currentActive = null
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: [0.3, 0.5, 0.7]
    }

    const observerCallback = (entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a,b)=> b.intersectionRatio - a.intersectionRatio)[0]

      if (visible) {
        const id = visible.target.id.toLowerCase()
        if (id !== currentActive) {
          currentActive = id
          links.forEach(link => {
            const linkId = hrefToId(link.getAttribute('href'))
            link.classList.toggle('active', linkId === id)
          })
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    sections.forEach(sec => observer.observe(sec))

    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick))
      observer.disconnect()
    }
  }, [])

  return (
    <div className='nav-wrapper'>
      <div className='brand'>
        <h2>Samuel Díaz</h2>
        <p className='muted'>Full Stack Developer</p>
        <p>Creo experiencias digitales accesibles con</p>
        <p>píxeles perfectos para la web.</p>
      </div>

      <nav className='nav-links'>
        <a href="#hero" className="nav-link">SOBRE MI</a>
        <a href="#experience" className="nav-link">EXPERIENCIA</a>
        <a href="#projects" className="nav-link">PROYECTOS</a>
      </nav>

      <div className="socials">
  <a
    href="https://github.com/samuelgiorno"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.linkedin.com/in/samuelgiorno"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>
  <a href="https://www.instagram.com/bysamuelgiorno"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  >
    <FaInstagram />
  </a>
  <a href="mailto:samuelgiorno@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Mail"
  >
    <FiMail />
  </a>
</div>
    </div>
  )
}
