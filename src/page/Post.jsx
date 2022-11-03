import { Avatar } from '@mui/material'
import React from 'react'
import InputOptions from '../Components/InputOptions'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({name , description, message, photoUrl}) => {

    
  return (
    <div className='bg-gray-100  w-[340px] md:w-[550px] h-40 mt-4 rounded-[12px]'> 
    <div className='flex m-2 p-2'>
        <Avatar  />
        <div className='pl-2'>
            <h2 className='font-bold '>{name}</h2>
            <p className='text-gray-500 text-[12px]'>{description}</p>
        </div>
    </div>
    <div className='m-4'>
        <p className='text-gray-700 -pt-2 pl-4'>{message}</p>
    </div>
    <div className='flex p-2 md:p-0 -mt-2'>
        <InputOptions title="like" Icon={ThumbUpIcon} color="blue" />
        <InputOptions title="Comment" Icon={CommentIcon} color="orange" />
        <InputOptions title="Share" Icon={ShareIcon} color="blue" />
        <InputOptions title="send" Icon={SendIcon} color="gray" />
    </div>
    
    </div>
  )
}

export default Post