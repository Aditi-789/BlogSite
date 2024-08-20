// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore";
import{ getAuth } from "firebase/auth";
import{ getStorage } from "firebase/storage"

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyChKYND_A4cM2wbqZWseX0pIiHaoIdWl4s",
    authDomain: "myblogs-9a1a9.firebaseapp.com",
    projectId: "myblogs-9a1a9",
    storageBucket: "myblogs-9a1a9.appspot.com",
    messagingSenderId: "187693894255",
    appId: "1:187693894255:web:398a181b19680bf5635b9a"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth= getAuth(app);
const storage= getStorage(app);

export{fireDB,auth,storage}