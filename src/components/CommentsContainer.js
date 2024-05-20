import React from 'react'
import Comment from './Comment'

const commentsData = [
  {
    name: "Jayesh Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Abhishek Malhan",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Ruhi Karn",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Soni Karn",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Deep Karn",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Ruhi Karn",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  }
                ],
              }
            ],
          }
        ],
      }
    ],
  },
  {
    name: "Golu Karn",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Raju Karn",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      }
    ],
  },
  {
    name: "Jayesh Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
]

const CommentsList = ({comments}) =>{
  return comments.map((comment,index) => (
    <div key={index} >
      <Comment data={comment} />
      <div className='pl-5 border border-l-black ml-4'>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer