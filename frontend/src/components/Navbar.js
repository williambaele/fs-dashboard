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
    <header aria-label="Site Header" class="shadow-sm">
      <div class="mx-auto max-w-screen-xl p-4">
        <div class="flex items-center justify-between gap-4 lg:gap-10">
          <div class="flex lg:w-0 lg:flex-1">
            <Link to="/">
              <span class="sr-only">Logo</span>
              <span class="inline-block h-10 w-32 rounded-lg bg-gray-200"></span>
            </Link>
          </div>

          <nav
            aria-label="Site Nav"
            class="hidden gap-8 text-sm font-medium md:flex"
          >
            <p class="text-gray-500" href="">
              About
            </p>
            <p class="text-gray-500" href="">
              Blog
            </p>
            <p class="text-gray-500" href="">
              Projects
            </p>
            <p class="text-gray-500" href="">
              Contact
            </p>
          </nav>

          <div class="hidden flex-1 items-center justify-end gap-4 sm:flex">
            {user && (
              <button
                onClick={handleClick}
                class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500"
                href=""
              >
                Log out
              </button>
            )}
            {!user && (
              <div>
                <Link to="/login">
                  <button class="rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500">
                    Log in
                  </button>
                </Link>
                <Link to="/signup">
                  <button class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">
                    Sign up
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
