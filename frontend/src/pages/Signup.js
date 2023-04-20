import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, setPseudo] = useState("");

  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, pseudo, password);
  };

  return (
    <div className="min-h-screen bg-login bg-cover flex items-center justify-center px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-200 p-8 grid gap-5 md:w-1/3 w-full rounded-lg shadow-lg"
          >
            <h2 className="text-center text-4xl">Sign up</h2>

            <input
              type="text"
              placeholder="Pseudo"
              onChange={(e) => setPseudo(e.target.value)}
              value={pseudo}
              className="p-2 pl-2 rounded-lg"
            />
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
              className="rounded-lg bg-[#f45050] p-1 hover:bg-[#f56262] text-white"
            >
              Sign up
            </button>
            {error && <p>{error}</p>}
            <Link to="/login">
              <p className="text-sm">Already have an account ?</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
