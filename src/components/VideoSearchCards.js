import React from 'react'

const VideoSearchCards = ({info}) => {
  const {snippet} = info;
  const {channelTitle, title, thumbnails, publishTime, description} = snippet;

  const dateObj = new Date(publishTime);

  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1; // Months are 0-indexed, so add 1
  const year = dateObj.getUTCFullYear();

  // Ensure two-digit formatting for day and month
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
  return (
    <div className='p-2 m-2 shadow-lg w-[80rem] flex'>
      <img alt="thumbnail" className="rounded-lg w-[15rem]" src={thumbnails.high.url} />
      <div className='ml-2 '>
          <ul className='h-full flex flex-col'>
            <li className='font-medium py-2'>{title}</li>
            <li className='text-xs text-gray-500'>Published Date: {formattedDate}</li>
            <li className='text-sm mt-5 text-gray-500'>{description}</li>
            <li className='text-sm mt-auto mb-6'>{channelTitle}</li>
          </ul>
      </div>
    </div>
  )
}

export default VideoSearchCards