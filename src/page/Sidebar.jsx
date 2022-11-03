import React from 'react'
import HeaderOptoins from './HeaderOptoins'
import avatar from '../acess/avatar.png';
import bgImg from '../acess/bgImg.jpeg';
import { useSelector } from 'react-redux';
import  { selectUser } from '../features/userSlice';
const Sidebar = () => {
    const user = useSelector(selectUser);
    
    const recentItem = (topic) => (
        <div className=' text-gray-600'> 
            <span className='text-gray-600 flex p-2' >#<p>{topic}</p></span>
           
        </div>
    )

    
  return (
      <div className=' md:ml-40'>
 
    <div className=' m-6 rounded-[14px] w-60 h-60 showad-lg bg-gray-100'>
           <img src={bgImg} alt='' className='z-0 w-[470px] h-20 rounded-[12px]'/>
        <div className='  mx-auto z-10 -mt-10 border-b-[1px] '>
         <div className='flex justify-center mx-auto mt-2 ml-2 '>
             <HeaderOptoins avatar={avatar} className='' />
         </div>
            
            <h1 className='text-center font-bold '>{user.displayName}</h1>
            <p className='text-gray-500 text-[12px] text-center' >{user.email}</p>
        </div>  
        <div className=' mt-6 m-2'>
            <div className='flex justify-between m-1'>
                <p  className='text-gray-600 '>Kontakt</p>
                <p className='text-blue-500'>18</p>
            </div>
            <div className='flex justify-between m-1'>
                <p className='text-gray-600 '>Einladung</p>
                <p className='text-blue-500'>1</p>
            </div>
        </div>
    
    </div>

    <div className='   m-6 p-4 rounded-[14px] w-60 h-80 showad-lg bg-gray-100'>
        <h2 className='text-[20px] '>Recent</h2>
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
        {recentItem("reactjs")}
    </div>
    </div>
  )
}

export default Sidebar