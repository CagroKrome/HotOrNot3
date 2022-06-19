import React from 'react'
import './comp.css'
import { useSelector, useDispatch } from 'react-redux';
import {allPosts, getPosts } from '../redux/arrayReducer'
import { increment } from '../redux/indexReducer';
import { HiOutlineX } from 'react-icons/hi'
import { HiHeart } from 'react-icons/hi'
import axios from 'axios';

function SingleBox() {
  const dispatch = useDispatch();
  const [isFinished, setIsFinished] = React.useState(false)

  const array = useSelector(allPosts)
  const index = useSelector(state => state.index)

  function notClick() {
    if (index === array.length - 1) {
      setIsFinished(true)
    } else if (index !== array.length - 1) {
      dispatch(increment())
    }
  }

  function hotClick() {
    axios.post('https://ckhot.herokuapp.com/like/', {
      id: array[index]._id,
      likes: array[index].likes
    })

    if (index === array.length - 1) {
      setIsFinished(true)
    } else if (index !== array.length - 1) {
      dispatch(increment())
    }
  }

  return (
    <section className='boxes'>
      <div style={isFinished ? {justifyContent: "center"} : {justifyContent: "space-between"}} className='box'>

        <section className='information'>

          <h1 className='box-title'>{isFinished ? "You've seen the whole universe." : array[index].text}</h1>

          <h3 style={isFinished ? {display: "none"} : {display: "block"}} className='box-likes'>
            <HiHeart className='heart'/>
            {array[index].likes}
          </h3>

        </section>

        <div className='buttons'>
          <HiOutlineX className='btn not-btn' style={isFinished ? {display: "none"} : {display: "inline-block"}} onClick={notClick}></HiOutlineX>
          <HiHeart className='btn hot-btn' style={isFinished ? {display: "none"} : {display: "inline-block"}} onClick={hotClick}></HiHeart>
        </div>
      </div>
    </section>
  )
}

export default SingleBox