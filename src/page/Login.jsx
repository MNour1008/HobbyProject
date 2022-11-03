import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import linkedIn from '../acess/linkedin.svg';
import { login } from '../features/userSlice';
import { auth} from '../firebase';
import { createUserWithEmailAndPassword , updateProfile, signInWithEmailAndPassword} from "firebase/auth";
const Login = () => {

    const [displayName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const dispatch = useDispatch();
   
    const loginOfApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName
                
                }))
        }).catch(error => alert(error));
    }

    const regester = () => {
        if(!displayName){
            alert("bitte geben sie full name ");
        }
        createUserWithEmailAndPassword(auth,email, password).then((userAuth) => {
            updateProfile( auth.currentUser,{
                displayName: displayName,
                  

            }).then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: displayName,
                   
                    })
                    );
            }); 
        }).catch(error => alert(error));
    };
  return (
    <div className='  grid justify-center content-center m-2'>
        <div className='flex justify-center '>
            <h1 className='font-bold text-[40px]'>linked</h1>
             <img  src={linkedIn} alt=""/>
        </div>
      
        <form >
            <div className='p-2 grid bg-blue-300 grid-cols-1 gap-4 justify-center content-center items-center rounded-[14px] h-[500px]'> 
                    <input  value={displayName} onChange={e => setName(e.target.value)} placeholder='full Name' type="text"  className='bg-gray-100 rounded-[14px] w-80 h-16 p-2' />
                    <input required value={email} onChange={e => setEmail(e.target.value)} placeholder='email' type="email"  className='bg-gray-100 rounded-[14px] w-80 h-16  p-2' />
                    <input required value={password} onChange={e => setPassword(e.target.value)} placeholder='password' type="password"  className='bg-gray-100 rounded-[14px] w-80 h-16  p-2' />
                    <button className='bg-blue-800 w-80 h-16 rounded-[14px] text-blue-300 text-[20px]' onClick={loginOfApp} >Login</button>
            </div>
        </form>

            <div className='flex justify-center '>
                <p>not a member? 
                <span className='text-red-500 ' onClick={regester}>register now</span>
                </p>
            </div>
    </div>
  )
}

export default Login