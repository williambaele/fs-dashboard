import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen bg-login bg-cover">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-red-600 p-4 grid grid-cols-2"
          >
            <h2 className="col-span-2">Login</h2>
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button disabled={isLoading} className="col-span-2">
              Login
            </button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
