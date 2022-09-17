// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import{getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9lAyHXORShMe-PjLzhR1dSrnD0HLYjWw",
  authDomain: "hulu-d720c.firebaseapp.com",
  projectId: "hulu-d720c",
  storageBucket: "hulu-d720c.appspot.com",
  messagingSenderId: "847863843013",
  appId: "1:847863843013:web:359db6153323179bfb48ac"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig); //instance
export let auth=getAuth(firebase)
export let storage=getStorage(firebase)