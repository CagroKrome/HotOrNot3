import React from 'react'
import './comp.css'
import { useSelector, useDispatch } from 'react-redux';
import {allPosts } from '../redux/arrayReducer'
import { increment } from '../redux/indexReducer';
import { HiHeart, HiOutlineX } from 'react-icons/hi'
import Finished from './Finished';
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
      {isFinished ? <Finished/> : 
            <div className='box'>

            <section className='information'>
    
              <h1 className='box-title'>{array[index].text}</h1>
    
              <h3 className='box-likes'>
                <HiHeart className='heart'/>
                {array[index].likes}
              </h3>
    
            </section>
    
            <div className='buttons'>
              <HiOutlineX className='btn not-btn' onClick={notClick}></HiOutlineX>
              <HiHeart className='btn hot-btn' onClick={hotClick}></HiHeart>
            </div>
          </div>
      }
    </section>
  )
}

export default SingleBox