import React from 'react'
import { HiHome } from 'react-icons/hi'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'
import { HiGlobe } from 'react-icons/hi'
import './navbar.css'

function Navbar(props) {
  return (
    <div className='navbar'>
        <a href='/' className={'home navbar-element ' + props.home}>
            <HiHome className='navbar-icon' />    
            <p>Home</p>
        </a>

        <a href='stats' className={'stats navbar-element ' + props.stats}>
            <HiOutlinePresentationChartLine className='navbar-icon' />   
            <p>Statistics</p>
        </a>

        <a href='about' className={'about navbar-element ' + props.about}>
            <HiGlobe className='navbar-icon' />  
            <p>About</p>
        </a>
    </div>
  )
}

export default Navbar