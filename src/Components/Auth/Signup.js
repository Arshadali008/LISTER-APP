import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

  
    const handleSignUp = async (e) => {
      e.preventDefault();
      try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredential);
        const user = userCredential.user;
        await updateProfile(userCredential.user, { displayName: name });
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/signin')
      }catch(error){
        console.error(error);
      }
    }

    //   if (!name || !email || !password || password !== confirmPassword) {
    //     setErrorMessage('Please fill in all fields and ensure passwords match.');
    //     return;
    //   }
    //   console.log('Name:', name);
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    //   setEmail('');
    //   setPassword('');
    //   setConfirmPassword('');
    //   setErrorMessage('');
    
  
    return (
      <div className="flex bg-blue-400 justify-center items-center h-screen">
        <form className="bg-blue-100 p-8 shadow-md rounded-md w-96">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
  
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
  
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>
  
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
  
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 p-2 border w-full rounded-md"
            />
          </div>
  
          <button
            type="submit"
            onClick={handleSignUp}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
          <div className='flex'>
          <h3 className='text-sm'>Already have an account?</h3>
          <Link to='/signin' className='text-sm text-blue-500 underline'>Sign In</Link>
          </div>
        </form>
      </div>
    );
}

export default Signup