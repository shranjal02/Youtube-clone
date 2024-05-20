import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants'
import VideoCards from './VideoCards'
import { Link } from 'react-router-dom'
import useGetVideos from '../hooks/useGetVideos'

const VideoContainer = () => {
  
  const videos = useGetVideos(YOUTUBE_VIDEOS_API)

  return (
    <div className='flex flex-wrap'>
      {
        videos.map(video => <Link key={video.id}  to={"/watch?v="+video.id} ><VideoCards info={video} /></Link>)
      }
    </div>
  )
}

export default VideoContainer