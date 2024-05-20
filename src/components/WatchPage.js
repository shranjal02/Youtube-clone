import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import {  useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {

  const [searchParams] = useSearchParams()
  const id = searchParams.get('v')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
  })
  return (
    <div className='flex flex-col m-2 p-2 w-full'>
      <div className='px-5 flex '>
        <div>
          <iframe 
            width="1100" 
            height="550" 
            src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>

        <div className='w-full'>
          <LiveChat />
        </div>
        
      </div>

      <CommentsContainer />
    </div>
    
  )
}

export default WatchPage