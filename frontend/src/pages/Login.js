import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="min-h-screen bg-login bg-cover flex items-center justify-center px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-200 p-8 grid gap-5 md:w-1/3 w-full rounded-lg shadow-lg"
          >
            <h2 className="text-center text-4xl">Login</h2>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="p-2 pl-2 rounded-lg"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="p-2 pl-2 rounded-lg"
            />
            <button
              disabled={isLoading}
              className="rounded-lg bg-[#FBAE3C] p-1 hover:bg-[#fbb650]"
            >
              Login
            </button>
            {error && <p>{error}</p>}
            <Link to="/signup">
              <p className="text-sm"> You don't have an account ? Create one</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
