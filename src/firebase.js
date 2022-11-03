import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB-Q56mAx5gFy3aPLnsylHvWBXH5YEqtEY",
    authDomain: "linkend-clone-app.firebaseapp.com",
    projectId: "linkend-clone-app",
    storageBucket: "linkend-clone-app.appspot.com",
    messagingSenderId: "154090875085",
    appId: "1:154090875085:web:9443f99d52dd8750c96184"

};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = getAuth(); 

export {db , auth};