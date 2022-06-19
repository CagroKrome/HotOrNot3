import React from 'react'
import Box from '../components/Box';
import Navbar from '../components/Navbar';


function Home() {
  return (
    <>
    <Navbar home={'active'} />
    <section className='app'>
      <Box />
    </section>
    </>
  )
}

export default Home