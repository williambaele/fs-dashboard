import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    toast.success("Logged in");
  };

  return (
    <div class="h-screen">
      <body class="bg-[#0b0b0b] flex h-full items-center py-16">
        <main class="w-full max-w-md mx-auto p-6">
          <div class="mt-7 bg-[#232323] rounded-xl shadow-sm dark:bg-gray-800">
            <div class="p-4 sm:p-7">
              <div class="text-center">
                <h1 class="block text-2xl font-bold text-gray-200">Sign in</h1>
                <p class="mt-2 text-sm text-gray-300">
                  Don't have an account yet?{" "}
                  <a
                    class="text-[#593EFE] decoration-2 hover:underline font-medium"
                    href="/signup"
                  >
                    Sign up here
                  </a>
                </p>
              </div>
              <div class="mt-5">
                <form onSubmit={handleSubmit}>
                  <div class="grid gap-y-4">
                    <div>
                      <label for="email" class="block text-sm mb-2 text-gray-400">
                        Email address
                      </label>
                      <div class="relative">
                        <input
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          class="py-3 px-4 block w-full rounded-md text-sm hover:outline-none outline-none"
                          required
                          aria-describedby="email-error"
                        />
                      </div>
                    </div>

                    <div>
                      <div>
                        <label for="password" class="block text-sm mb-2 text-gray-400">
                          Password
                        </label>
                      </div>
                      <div class="relative">
                        <input
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          class="py-3 px-4 block w-full rounded-md text-sm hover:outline-none outline-none "
                          required
                          aria-describedby="password-error"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#593EFE] text-white hover:bg-[#593EFE]/80 focus:outline-none  transition-all text-sm "
                    >
                      Sign in
                    </button>
                    {error && <p>{error}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </body>
    </div>
  );
};

export default Login;
