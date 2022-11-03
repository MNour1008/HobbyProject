import React from 'react'
import { Avatar } from '@mui/material';
const HeaderOptoins = ({avatar, title, Icon, onClick}) => {
  return (
    <div className='pt-2 px-5 block  items-center mr-[20px] 	  '>
        {Icon && <Icon   style={{color: 'gray'  }}/>}
        {avatar && <Avatar  className='w-3 h-4 rounded-full   ' src={avatar} onClick={onClick} />}
        <h5 className='text-sm  text-gray-600  '>{title}</h5> 
    
    </div>
  )
}

export default HeaderOptoins