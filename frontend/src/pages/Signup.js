import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';

const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signup, error, isLoading } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button>Signup</button>
        { error }
      </form>

    </div>
  );
};

export default Signup;
