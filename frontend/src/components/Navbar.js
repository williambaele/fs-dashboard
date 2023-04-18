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
    <header aria-label="Site Header" className="shadow-sm bg-[#001220]">
      <div class="mx-auto max-w-screen-xl p-4 ">
        <div class="flex items-center justify-between gap-4 lg:gap-10 ">
          <div class="flex lg:w-0 lg:flex-1">
            <Link to="/">
              <span class="sr-only">Logo</span>
              <span class="inline-block h-10 w-32 rounded-lg bg-[#FBAE3C] flex items-center justify-center text-white font-bold">
                T-Budy
              </span>
            </Link>
          </div>

          <nav
            aria-label="Site Nav"
            class="hidden gap-8 text-sm font-medium md:flex text-white"
          >
            <p href="">About</p>
            <p href="">Blog</p>
            <p href="">Projects</p>
            <p href="">Contact</p>
          </nav>

          <div class="hidden flex-1 items-center justify-end gap-4 sm:flex">
            {user && (
              <div className="flex items-center">
                <button
                  onClick={handleClick}
                  class="rounded-lg bg-[#FBAE3C] px-5 py-2 text-sm font-medium text-white"
                  href=""
                >
                  Log out
                </button>
                <Link to="/new-item">
                <button className="px-5 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#FBAE3C"
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
