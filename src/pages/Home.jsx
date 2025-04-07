import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Profile from './Profile'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import { ExperienceEducation } from './Exp' 
function Home() {
  return (
    <>
    <Header/>
    <Profile/>
    <About/>
    <Skills/>
    <Projects/>
    <ExperienceEducation />
    <Footer/>
    </>
  )
}

export default Home