import React from 'react'
import { Avatar } from '@mui/material';
const InputOptions = ({ title, Icon, color}) => {
  return (
    <div className='flex pt-4 px-1 md:px-5 block  items-center mr-[16px] hover:rounded-[10px] cursor-pointer'>
        {Icon && <Icon   style={{color: color}}/>}
        <h5 className='text-sm  text-gray-600  pl-0 md:pl-1'>{title}</h5> 
    
    </div>
  )
}

export default InputOptions