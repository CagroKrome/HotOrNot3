import React from 'react'
import Navbar from '../components/Navbar';
import { useSelector, useDispatch } from 'react-redux'
import {allPosts, getPosts} from '../redux/arrayReducer'
import axios from 'axios';
import { HiHeart } from 'react-icons/hi'
import './stats.css'


function Stats() {
  const dispatch = useDispatch()
  const array = useSelector(allPosts)

  const [sortedPosts, setSortedPosts] = React.useState([])

  React.useEffect(() => {
    axios.get('https://ckhot.herokuapp.com/stats/')
      .then(res => setSortedPosts(res.data))
  }, [])

  let mappedPosts = sortedPosts.map(element => (
    <div className='stats-box'>
      <h1>{element.text}</h1>
      <h3 className='stats-box-likes'>
        <HiHeart/>
        {element.likes}
      </h3>
    </div>
  ))

  return (
    <>
    <Navbar stats={'active'} />
      <section className='stats-app'>
        {mappedPosts}
      </section>
    </>
  )
}

export default Stats