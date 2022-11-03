import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { Header, Sidebar, Feed, Login } from './page/index';
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';




function App() {

  const userAuth = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if(userAuth){
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            
          }));

          
      }else {
        dispatch(logout());
       

      }


    });
  }, []);

  return (
    <div className="App">
      <Header />

    {/** Sidebar left */}
   {!userAuth ? <Login /> :(
      <div className='grid grid-cols-1 md:grid-cols-3'>
      <div className=''>
        <Sidebar />
      </div>
      <div>
        <Feed />
      </div>
    </div>
   )

   } 
    


    </div>
  );
}

export default App;
