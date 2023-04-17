import React, { useState } from 'react';

const Signup = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button>Signup</button>
      </form>

    </div>
  );
};

export default Signup;
