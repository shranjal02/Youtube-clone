import React, { useDebugValue, useEffect } from 'react'
import useGetVideos from '../hooks/useGetVideos'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { openMenu } from '../utils/appSlice'
import VideoSearchCards from './VideoSearchCards'

const VideosSearchContainer = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const query = searchParams.get('query')
  const videos = useGetVideos(YOUTUBE_SEARCH_API, query)

  useEffect(() => {
    dispatch(openMenu())
  },[])

  if(videos.length === 0)   return null;
  return (
    <div>
        {
            videos.map(video => video.id.kind === 'youtube#video' && <Link key={video.id.videoId}  to={"/watch?v="+video.id.videoId} ><VideoSearchCards info={video} /></Link>)
        }
    </div>
  )
}

export default VideosSearchContainer