import React from 'react'
import { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import Authenticate from './components/Authenticate';
import './App.css'

function App() {
  const [token, setToken] =useState(null);
console.log('Token:', token);

  return (
    <>
    
      <SignUpForm  setToken ={setToken}/>
    
      <Authenticate token ={token} />
      </>
  );
  
}

export default App
