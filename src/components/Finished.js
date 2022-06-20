import React from 'react'
import { HiEmojiHappy } from 'react-icons/hi'

function Finished() {
  return (
    <div className='finished'>
        <HiEmojiHappy className='finished-icon' />
        <h1 className='finished-h1'>You've seen everything!</h1>
        <a className='finished-add' href='/add'>Wanna add your own post?</a>
    </div>
  )
}

export default Finished