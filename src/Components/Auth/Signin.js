import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../Firebase';


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate =useNavigate();
  
    const handleSignIn = async (e) => {
      e.preventDefault();
      // signInWithEmailAndPassword(auth,email,password)
      // .then((userCredential)=>{
      //   console.log(userCredential);
      // })

      try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log(userCredential);
        const user = userCredential.user;
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/')
      }catch(error){
        console.error(error);
      }
    }
  
    //     if (!email || !password) {
    //     setErrorMessage('Please enter both email and password.');
    //     return;
    //   }
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    //   setEmail('');
    //   setPassword('');
    //   setErrorMessage('');
    // };
  
    return (
      <div className="flex justify-center bg-blue-400 items-center h-screen">
        <form className="bg-blue-100 p-8 shadow-md rounded-md w-96">
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>
  
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
  
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>
  
          <button
            type="submit"
            onClick={handleSignIn}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
          <div className='flex'>
          <h3 className='text-sm'>Don't have an account?</h3>
          <Link to='/Signup' className='text-sm text-blue-500 underline'>Sign Up</Link>
          </div>
        </form>
      </div>
    );
}

export default Signin