import React from 'react'
import Navbar from '../components/Navbar';


function About() {
  return (
    <>
    <Navbar about={'active'} />
    <section className='about-app'>
        <h1>About</h1>
    </section>
    </>
  )
}

export default About