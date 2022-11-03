import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import linked from '../acess/linkedin.svg';
import HeaderOptionns from './HeaderOptoins';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import avatar from '../acess/avatar.png';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import {auth } from "../firebase";
import {signOut } from "firebase/auth";
const Header = () => {
    const dispatch = useDispatch();

    const logoutApp = () =>{
        dispatch(logout());
        signOut(auth);
    }
  return (
    <div className='flex justify-evenly border-b-[2px] '>
        <div className='flex  '>
            <img src={linked} alt='linked-logo' />
            <div className='pl-1 pt-6 flex  justify-evenly ' >
               <SearchIcon  style={{color: "gray"}} />
               <input type="text"  className='bg-gray-100 rounded-[12px] w-[180px] h-14'/> 
            </div>
        </div>
        <div className='p-3 flex  hidden md:inline-flex '> 
            <HeaderOptionns  title="Start" Icon={HomeIcon}  />
            <HeaderOptionns title="Ihr Netzwerk" Icon={PeopleIcon} /> 
            <HeaderOptionns title="Jobs" Icon={WorkOutlineIcon} />
            <HeaderOptionns title="Nachrichten" Icon={ChatIcon} />
            <HeaderOptionns title="Mitteilungen" Icon={NotificationsIcon} />
           
            <HeaderOptionns title="me" avatar={avatar} onClick={logoutApp} />
                
            
        </div>
        <div className='inline-flex md:hidden'>
            <HeaderOptionns title="me" avatar={avatar} onClick={logoutApp} />
                </div>
    </div>
  )
}

export default Header