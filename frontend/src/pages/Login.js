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
      <body class="bg-gray-100 flex h-full items-center py-16">
        <main class="w-full max-w-md mx-auto p-6">
          <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800">
            <div class="p-4 sm:p-7">
              <div class="text-center">
                <h1 class="block text-2xl font-bold text-gray-800">Sign in</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account yet?{" "}
                  <a
                    class="text-blue-600 decoration-2 hover:underline font-medium"
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
                      <label for="email" class="block text-sm mb-2">
                        Email address
                      </label>
                      <div class="relative">
                        <input
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm border-gray-200 border"
                          required
                          aria-describedby="email-error"
                        />
                        <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                          <svg
                            class="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div>
                        <label for="password" class="block text-sm mb-2">
                          Password
                        </label>
                      </div>
                      <div class="relative">
                        <input
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          class="py-3 px-4 block w-full border-gray-200 rounded-md text-sm border-gray-200 border"
                          required
                          aria-describedby="password-error"
                        />
                        <div class="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                          <svg
                            class="h-5 w-5 text-red-500"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
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
