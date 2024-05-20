import React from 'react'
import Button from './Button'

const list = ['All', 'Gaming', 'Songs', 'Soccer', 'Live', 'Cricket', 'Cooking', 'News', 'Valentines']

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map(l => <Button name={l} key={l} />)
      }
    </div>
  )
}

export default ButtonList