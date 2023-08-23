import React from "react";
import { useLogout } from "../hooks/useLogout";

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };
  return (
    <div className="hidden md:block h-screen bg-[#0b0b0b] text-white sticky top-0 left-0 bottom-0 z-[60] w-64 border-r border-gray-700 pt-7 pb-10 overflow-y-auto scrollbar-y">
      <div className="px-6">
        <span className="flex-none ml-2 text-3xl font-semibold" href="/">
          <span className="text-[#593EFE]/80">u</span>
          Tasks
        </span>
      </div>

      <nav className="flex flex-col flex-wrap justify-between w-full h-full p-6">
        <ul className="space-y-1.5 ">
          <li onClick={() => setActiveMenu("dashboard")}>
            <div
              className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-100 rounded-md cursor-pointer ${
                activeMenu === "dashboard"
                  ? "bg-[#593EFE] font-bold"
                  : "hover:bg-[#593EFE]"
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fillRule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              Dashboard
            </div>
          </li>

          <li onClick={() => setActiveMenu("group")}>
            <div
              className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-100 rounded-md cursor-pointer ${
                activeMenu === "group"
                  ? "bg-[#593EFE] font-bold"
                  : "hover:bg-[#593EFE]"
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"></path>
              </svg>
              Groups
            </div>
          </li>
          <li onClick={() => setActiveMenu("tasks")}>
            <div
              className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-100 rounded-md cursor-pointer ${
                activeMenu === "tasks"
                  ? "bg-[#593EFE] font-bold"
                  : "hover:bg-[#593EFE]"
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z"></path>
                <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z"></path>
              </svg>
              Tasks
            </div>
          </li>

          <li onClick={() => setActiveMenu("account")}>
            <div
              className={`flex items-center gap-x-3.5 py-2 px-2.5  text-sm text-gray-100 rounded-md cursor-pointer ${
                activeMenu === "account"
                  ? "bg-[#593EFE] font-bold"
                  : "hover:bg-[#593EFE]"
              }`}
            >
              <svg
                className="w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              Account
            </div>
          </li>
        </ul>
        <button onClick={handleClick}>
          <div className="flex items-center gap-x-3.5 py-2 px-2.5 bg-[#593EFE] text-sm text-gray-100 rounded-md hover:bg-[#593EFE]/80 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
            Log out
          </div>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
