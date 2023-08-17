import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

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
    <div class="h-screen">
      <body class="bg-gray-100 flex h-full items-center py-16">
        <main class="w-full max-w-md mx-auto p-6">
          <div class="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div class="p-4 sm:p-7">
              <div class="text-center">
                <h1 class="block text-2xl font-bold text-gray-800">Sign up</h1>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    class="text-blue-600 decoration-2 hover:underline font-medium"
                  >
                    Sign in here
                  </a>
                </p>
              </div>
              <div class="mt-5">
                <form onSubmit={handleSubmit}>
                  <div class="grid gap-y-4">
                  <div>
                      <label for="pseudo" class="block text-sm mb-2">
                        Pseudo
                      </label>
                      <div class="relative">
                        <input
                          type="pseudo"
                          placeholder="Pseudo"
                          value={pseudo}
                          onChange={(e) => setPseudo(e.target.value)}
                          class="py-3 px-4 block w-full  rounded-md text-sm border-gray-200 border"
                          required
                        />
                       
                      </div>
                    </div>
                    <div>
                      <label for="email" class="block text-sm mb-2">
                        Email address
                      </label>
                      <div class="relative">
                        <input
                          type="email"
                          placeholder="Email"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          class="py-3 px-4 block w-full  rounded-md text-sm border-gray-200 border"
                          required
                          aria-describedby="email-error"
                        />
                       
                      </div>
                    </div>
                    <div>
                      <label for="password" class="block text-sm mb-2">
                        Password
                      </label>
                      <div class="relative">
                        <input
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          class="py-3 px-4 block w-full  rounded-md text-sm border-gray-200 border"
                          required
                        />
                       
                      </div>
                    </div>

                    <div class="flex items-center">
                      <div class="flex">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </div>
                      <div class="ml-3">
                        <label for="remember-me" class="text-sm">
                          I accept the{" "}
                          <a
                            href="/"
                            class="text-blue-600 decoration-2 hover:underline font-medium"
                          >
                            Terms and Conditions
                          </a>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-all text-sm"
                    >
                      Sign up
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

export default Signup;