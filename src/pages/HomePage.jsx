import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import MySkills from '../components/skills/MySkills'
import MyProjects from '../components/projects/MyProjects'
import MyExperience from '../components/experience/MyExperience'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Hero />
        <About />
        <MySkills />
        <MyProjects />
        <MyExperience />
        <Contact />
        <Footer />
    </div>
  )
}

export default HomePage