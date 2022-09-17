import React from 'react'
import {signInWithPopup} from 'firebase/auth'
import { auth } from './../../../apis/Firebase';

const SocialProvider = async (provider) => {
   try {
    const result = await signInWithPopup(auth, provider);
    return result.user
   } catch (error) {
    console.log(error);
   }
}

export default SocialProvider