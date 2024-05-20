import React from 'react'
import { USER_ICON } from '../utils/constants'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm py-2'>
        <img className='h-8' alt="userLogo" src={USER_ICON} />
        <p className='px-2'><span className='font-bold'>{name}</span> : {message}</p>
    </div>
  )
}

export default ChatMessage