import { useEffect, useState } from "react"

const useGetVideos = (url, query="") => {
  const [videos, setvideos] = useState([])
  useEffect(() => {
    getVideos()
  },[query])

  const getVideos = async () => {
    const data = await fetch(url+query)
    const json = await data.json()
    setvideos(json.items)
  }

  return videos;
}

export default useGetVideos;