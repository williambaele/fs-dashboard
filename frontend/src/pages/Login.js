import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
        <button disabled={isLoading}>Signup</button>
        { error &&
        <p>{error}</p>}
      </form>

    </div>
  );
};

export default Login;
