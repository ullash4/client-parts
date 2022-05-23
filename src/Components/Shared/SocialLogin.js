import React, { useEffect } from 'react'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

function SocialLogin() {
    const [signInWithGithub, user] = useSignInWithGithub(auth);
    const [signInWithGoogle, gUser] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    useEffect(()=>{
        if(user || gUser){
          navigate('/')
        }
      },[navigate , user, gUser])
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
      };
    const handleSignInWithGithub = () => {
        signInWithGithub();
      };
  return (
    <div>
        <div>
      <button
        onClick={handleSignInWithGoogle}
        className="btn btn-primary w-full max-w-xs mb-5  btn-outline"
      >
        Continue with Google
      </button>
      <button 
      onClick={handleSignInWithGithub}
      className="btn btn-primary w-full max-w-xs  btn-outline">
        Continue with Github
      </button>
    </div>
    </div>
  )
}

export default SocialLogin