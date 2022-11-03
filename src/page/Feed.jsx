import React, { useState, useEffect } from 'react'
import InputOptions from '../Components/InputOptions'
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import DateRangeIcon from '@mui/icons-material/DateRange';
import WebIcon from '@mui/icons-material/Web';
import Post from './Post';
import {db, auth} from '../firebase';
import { serverTimestamp } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Feed = () => {
    const user = useSelector(selectUser);
    const [posts, setPost] = useState([]);
    const [input, setInput] = useState("");



    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
            setPost(
                snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),

                }
            )))


    );
      

    }, [])


    const sendPost = (e) => {
       
        e.preventDefault();
        db.collection('posts').add({
            displayName: user.displayName,
            description: user.email,
            message: input,
            timestamp: serverTimestamp(),

        })  

        setInput("");
    };


  return (
      <div>
    <div className='bg-gray-100 w-[340px] md:w-[550px] h-40 mt-4 m-2 md:m-0 rounded-[12px]'>
        <form>
  
            <input  type="text" value={input} onChange={e => setInput(e.target.value)} className='m-4 w-[300px] md:w-[510px] h-14 rounded-full border-2 border-solid p-2' placeholder='Beitrag beginnen' />
            <button onClick={sendPost} type='submit' className='hidden'>Send</button>
                    
        </form>
        <div className='flex '>
            <InputOptions title="Foto" Icon={ImageIcon} color='blue' />
            <InputOptions title="Video" Icon={YouTubeIcon} color='green'  />
            <InputOptions title="Event" Icon={DateRangeIcon} color='orange'  />
            <InputOptions title="Aritkel schreiben" Icon={WebIcon}  color='red' />
        </div>
    </div>

    <div >
        {
            
           posts.map(({id, data: {name, description, message, photoUrl}}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}

                />
           )) }
  
      
    </div>
    </div>
  ) 
}

export default Feed