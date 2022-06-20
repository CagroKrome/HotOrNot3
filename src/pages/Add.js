import React from 'react'
import Navbar from '../components/Navbar';
import { HiSparkles, HiCheck } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './add.css'


function Add() {
  const navigate = useNavigate()
  const [postValue, setPostValue] = React.useState("")
  function handleChange(e) {
    setPostValue(e.target.value)
  }

  function addPost() {
    if (postValue.length < 3) {
      // send error vs
      window.location.reload()
    } else {
        axios.post('https://ckhot.herokuapp.com/add', {
          text: postValue
        }).then(navigate('/'))
    }
  }

  return (
    <>
    <Navbar add={'active'} />
    <section className='add-app'>
      <section className='input-field'>
        <h1 className='add-h1'>
          <HiSparkles/>
          Add a new post
        </h1>
        <section className='input-and-btn'>
          <input onChange={handleChange} placeholder='Type your brilliant idea.' className='input' type="text"></input>
          <button onClick={addPost} className='check-btn'><HiCheck/></button>
        </section>
      </section>
    </section>
    </>
  )
}

export default Add