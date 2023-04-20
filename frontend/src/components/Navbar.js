import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header aria-label="Site Header" className="shadow-sm bg-[#3C486B]">
      <div class="mx-auto max-w-screen-xl p-4 ">
        <div class="flex items-center justify-between gap-4 lg:gap-10">
          <div class="flex lg:w-0 lg:flex-1">
            <Link to="/">
              <span class="sr-only">Logo</span>
              <span class="inline-block h-10 w-32 rounded-lg bg-[#F45050] flex items-center justify-center text-white font-bold">
                T-Budy
              </span>
            </Link>
          </div>

          <nav
            aria-label="Site Nav"
            class="hidden gap-8 text-sm font-medium md:flex text-white"
          >
            <Link to="/items">
              <p>Items</p>
            </Link>
          </nav>

          <div class="hidden flex-1 items-center justify-end gap-4 sm:flex">
            {user && (
              <div className="flex items-center">
                <button
                  id="dropdownInformationButton"
                  data-dropdown-toggle="dropdownInformation"
                  class="text-white bg-[#F45050] focus:outline-none  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
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

                <div
                  id="dropdownInformation"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Bonnie Green</div>
                    <div class="font-medium truncate">{user.email}</div>
                  </div>
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownInformationButton"
                  >
                    <li>
                      <Link to="/account">
                        <p class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Dashboard
                        </p>
                      </Link>
                    </li>

                    <li>
                      <p class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Earnings
                      </p>
                    </li>
                  </ul>
                  <div class="py-2">
                    <p
                      onClick={handleClick}
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </p>
                  </div>
                </div>

                <Link to="/new-item">
                  <button className="px-5 py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#F45050"
                      class="bi bi-plus-square-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </Link>
              </div>
            )}
            {!user && (
              <div>
                <Link to="/login">
                  <button class="rounded-lg bg-[#F45050] px-5 py-2 text-sm font-medium text-white">
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
