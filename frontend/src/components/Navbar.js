import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
    toast.success("Logged out");
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleClickDd = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header aria-label="Site Header" className="shadow-sm bg-white">
      <div class="mx-auto max-w-screen-xl p-4 ">
        <div class="flex items-center justify-between gap-4 lg:gap-10">
          <div class="flex lg:w-0 lg:flex-1">
            <Link to="/">
              <span class="h-10 w-32 bg-gray-400 rounded-lg  flex items-center justify-center text-white font-bold">
                T-Budy
              </span>
            </Link>
          </div>

          <nav class="hidden gap-8 text-sm font-medium md:flex text-gray-400">
            <Link to="/articles">
              <p>Articles</p>
            </Link>
          </nav>

          <div class="flex-1 items-center justify-end gap-4 sm:flex">
            {user && (
              <div className="flex items-center relative">
                <button
                  id="ddButton"
                  class="text-white bg-[#F45050] hover:bg-[#f56262] focus:outline-none  font-medium rounded-lg text-sm px-2 md:px-6 py-2.5 text-center inline-flex items-center"
                  type="button"
                  onClick={handleClickDd}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  </svg>
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {showDropdown && (
                  <div class="absolute top-10 left-0 z-50 md:w-32">
                    <div
                      id="ddInfos"
                      class="z-99 bg-white divide-y divide-gray-100 rounded-lg shadow"
                    >
                      <div class="px-4 py-3 text-sm text-gray-900 ">
                        <div>{user.pseudo} 👋🏼</div>
                      </div>
                      <ul
                        class="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownInformationButton"
                      >
                        <li>
                          <Link to="/dashboard">
                            <p class="block px-4 py-2 hover:bg-gray-100">
                              My account
                            </p>
                          </Link>
                        </li>
                        <Link to="/new-article">
                          <li>
                            <p class="block px-4 py-2 hover:bg-gray-100">
                              Add an article
                            </p>
                          </li>
                        </Link>
                      </ul>
                      <div class="py-2">
                        <p
                          onClick={handleClick}
                          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Sign out
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
            {!user && (
              <div>
                <Link to="/login">
                  <button class="rounded-lg bg-[#F45050] hover:bg-[#f56262] px-5 py-2 text-sm font-medium text-white">
                    Log in
                  </button>
                </Link>
              </div>
            )}
          </div>
          <div class="lg:hidden">
            <button
              class="rounded-lg bg-gray-100 p-2 text-gray-600"
              type="button"
            >
              <span class="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewbox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
