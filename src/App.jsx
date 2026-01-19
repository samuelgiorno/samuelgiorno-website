import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import './App.css'

export default function App() {
  useEffect(() => {
    const spotlight = document.getElementById('spotlight');

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      spotlight.style.setProperty('--x', `${x}px`);
      spotlight.style.setProperty('--y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [])


  return (
    <>
    <div className='layout'>
      <aside className='sidebar'>
        <Navbar/>
      </aside>
      <main className='content'>
        <section id="hero"><Hero /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="footer"><Footer /></section>
      </main>
    </div>

    <div id="spotlight" className="spotlight"></div>

    </>
  )
}