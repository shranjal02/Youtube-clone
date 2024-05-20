import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomComment } from '../utils/constants'

const LiveChat = () => {
  const dispatch = useDispatch()

  const chatMsg = useSelector(state => state.chat.messages)
  const [liveMsg, setLiveMsg] = useState("")

  useEffect(() => {
    const i = setInterval(() => {
        //polling{ assume this comment as fake api call and dispatching it}

        const messageObj = generateRandomComment()
        dispatch(addMessage(messageObj))
    },1500)

    return() => {
        clearInterval(i)
    }
  },[])
  return (
    <>
      <div className='overflow-y-scroll ml-2 h-[550px] w-full bg-gray-100 rounded-lg p-2 border border-black flex flex-col-reverse'>
        {
            chatMsg.map((c) => (
                <ChatMessage name={c.name} message={c.message} />
            ))
        }
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
        dispatch(addMessage({
          name: "Jayesh Kumar",
          message: liveMsg
        }))
        setLiveMsg("")

      }} className='w-full p-2 ml-2 mt-2 border border-black flex'>
        <input value={liveMsg} onChange={e => setLiveMsg(e.target.value)} className='px-2 w-[16rem] border border-gray-600' type="text" />
        <button className='p-2 mx-2 bg-green-100'>Send</button>
      </form>
    </>
    
  )
}

export default LiveChat