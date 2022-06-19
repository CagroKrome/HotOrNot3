import React from 'react'
import Box from '../components/Box';
import Navbar from '../components/Navbar';
import '../index.css'


function Home() {
  return (
    <>
    <Navbar home={'active'} />
    <section className='home-app'>
      <Box />
    </section>
    </>
  )
}

export default Home