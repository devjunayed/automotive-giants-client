import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { BsPersonCircle } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const { cart, user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState("");
  const [menuToogle, setMenuToogle] = useState(true);

  function handleModeChange() {
    const html = document.documentElement;
    const toggleButton = document.getElementById("toggleButton");

    if (mode == "light") {
      html.classList.remove("light");
      html.classList.add("dark");
      setMode("dark");
      toggleButton.setAttribute("checked", "");
      localStorage.setItem("mode", "dark");
      console.log("dark mode on");
    } else {
      html.classList.remove("dark");
      html.classList.add("light");
      setMode("light");
      toggleButton.removeAttribute("checked");
      localStorage.setItem("mode", "light");
      console.log("light mode on");
    }
  }

  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "light";
    setMode(currentMode);
    const html = document.documentElement;
    const toggleButton = document.getElementById("toggleButton");

    if (currentMode == "light") {
      toggleButton.removeAttribute("checked");
    } else {
      html.classList.add(currentMode);
      toggleButton.setAttribute("checked", "");
    }
  }, []);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/add_product">Add Product</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-indigo-800  to-purple-800 dark:text-slate-300 text-white">
        <div className="navbar-start">
          {/* Menus on smaller screen */}
          <div className="">
            <label onClick={()=> setMenuToogle(false)} tabIndex={0} className="btn  btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <div className={`${menuToogle ? "translate-x-[-100%]" : "translate-x-0"} origin-left duration-500 transition-transform bg-gradient-to-r from-indigo-800 to-purple-800 left-0 -ml-2  z-[1] h-screen fixed top-0 p-6 shadow bg-base-100 rounded-box w-52`}>
                <div className="flex justify-end">

              <MdCancel onClick={()=> setMenuToogle(true)} className="text-xl mb-4" />
                </div>

              <ul tabIndex={0} className="space-y-6 smallmenu w-full">{links}</ul>
            </div>

            {/* Old Menu */}
            {/* <ul tabIndex={0} className="bg-gradient-to-r from-indigo-800 to-purple-800 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul> */}
          </div>

          <Link to="/">
            <img
              src={logo}
              className="w-full md:w-6/12 active:text-white"
              alt=""
            />
          </Link>
        </div>
        {/* Menus on bigger screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <label className="theme-switch">
              <input
                onClick={handleModeChange}
                type="checkbox"
                name="checkbox"
                className="theme-switch__checkbox"
                id="toggleButton"
              />
              <div className="theme-switch__container">
                <div className="theme-switch__clouds"></div>
                <div className="theme-switch__stars-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 144 55"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M135.831 3.00688C135.055 3.85027 134.111 4.29946 133 4.35447C134.111 4.40947 135.055 4.85867 135.831 5.71123C136.607 6.55462 136.996 7.56303 136.996 8.72727C136.996 7.95722 137.172 7.25134 137.525 6.59129C137.886 5.93124 138.372 5.39954 138.98 5.00535C139.598 4.60199 140.268 4.39114 141 4.35447C139.88 4.2903 138.936 3.85027 138.16 3.00688C137.384 2.16348 136.996 1.16425 136.996 0C136.996 1.16425 136.607 2.16348 135.831 3.00688ZM31 23.3545C32.1114 23.2995 33.0551 22.8503 33.8313 22.0069C34.6075 21.1635 34.9956 20.1642 34.9956 19C34.9956 20.1642 35.3837 21.1635 36.1599 22.0069C36.9361 22.8503 37.8798 23.2903 39 23.3545C38.2679 23.3911 37.5976 23.602 36.9802 24.0053C36.3716 24.3995 35.8864 24.9312 35.5248 25.5913C35.172 26.2513 34.9956 26.9572 34.9956 27.7273C34.9956 26.563 34.6075 25.5546 33.8313 24.7112C33.0551 23.8587 32.1114 23.4095 31 23.3545ZM0 36.3545C1.11136 36.2995 2.05513 35.8503 2.83131 35.0069C3.6075 34.1635 3.99559 33.1642 3.99559 32C3.99559 33.1642 4.38368 34.1635 5.15987 35.0069C5.93605 35.8503 6.87982 36.2903 8 36.3545C7.26792 36.3911 6.59757 36.602 5.98015 37.0053C5.37155 37.3995 4.88644 37.9312 4.52481 38.5913C4.172 39.2513 3.99559 39.9572 3.99559 40.7273C3.99559 39.563 3.6075 38.5546 2.83131 37.7112C2.05513 36.8587 1.11136 36.4095 0 36.3545ZM56.8313 24.0069C56.0551 24.8503 55.1114 25.2995 54 25.3545C55.1114 25.4095 56.0551 25.8587 56.8313 26.7112C57.6075 27.5546 57.9956 28.563 57.9956 29.7273C57.9956 28.9572 58.172 28.2513 58.5248 27.5913C58.8864 26.9312 59.3716 26.3995 59.9802 26.0053C60.5976 25.602 61.2679 25.3911 62 25.3545C60.8798 25.2903 59.9361 24.8503 59.1599 24.0069C58.3837 23.1635 57.9956 22.1642 57.9956 21C57.9956 22.1642 57.6075 23.1635 56.8313 24.0069ZM81 25.3545C82.1114 25.2995 83.0551 24.8503 83.8313 24.0069C84.6075 23.1635 84.9956 22.1642 84.9956 21C84.9956 22.1642 85.3837 23.1635 86.1599 24.0069C86.9361 24.8503 87.8798 25.2903 89 25.3545C88.2679 25.3911 87.5976 25.602 86.9802 26.0053C86.3716 26.3995 85.8864 26.9312 85.5248 27.5913C85.172 28.2513 84.9956 28.9572 84.9956 29.7273C84.9956 28.563 84.6075 27.5546 83.8313 26.7112C83.0551 25.8587 82.1114 25.4095 81 25.3545ZM136 36.3545C137.111 36.2995 138.055 35.8503 138.831 35.0069C139.607 34.1635 139.996 33.1642 139.996 32C139.996 33.1642 140.384 34.1635 141.16 35.0069C141.936 35.8503 142.88 36.2903 144 36.3545C143.268 36.3911 142.598 36.602 141.98 37.0053C141.372 37.3995 140.886 37.9312 140.525 38.5913C140.172 39.2513 139.996 39.9572 139.996 40.7273C139.996 39.563 139.607 38.5546 138.831 37.7112C138.055 36.8587 137.111 36.4095 136 36.3545ZM101.831 49.0069C101.055 49.8503 100.111 50.2995 99 50.3545C100.111 50.4095 101.055 50.8587 101.831 51.7112C102.607 52.5546 102.996 53.563 102.996 54.7273C102.996 53.9572 103.172 53.2513 103.525 52.5913C103.886 51.9312 104.372 51.3995 104.98 51.0053C105.598 50.602 106.268 50.3911 107 50.3545C105.88 50.2903 104.936 49.8503 104.16 49.0069C103.384 48.1635 102.996 47.1642 102.996 46C102.996 47.1642 102.607 48.1635 101.831 49.0069Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <div className="theme-switch__circle-container">
                  <div className="theme-switch__sun-moon-container">
                    <div className="theme-switch__moon">
                      <div className="theme-switch__spot"></div>
                      <div className="theme-switch__spot"></div>
                      <div className="theme-switch__spot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
          {user ? (
            <div className="flex">
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span className="badge badge-sm indicator-item">
                        {cart.length}
                      </span>
                    </div>
                  </label>
                  <div
                    tabIndex={0}
                    className="mt-3 z-[1] card card-compact dropdown-content w-52  bg-gradient-to-r from-indigo-800 to-purple-800 shadow"
                  >
                    <div className="card-body">
                      <span className="font-bold text-lg">
                        {cart.length} Items
                      </span>
                      <div className="card-actions">
                        <Link to={`/cart/${user.uid}`}>
                          <button className="btn btn-primary btn-block">
                            View cart
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={0}
                  className="btn  btn-ghost btn-circle avatar"
                >
                  <div className="w-10  rounded-full">
                    {user.photoURL ? (
                      <img src={user.photoURL} />
                    ) : (
                      <BsPersonCircle className="w-full h-full" />
                    )}
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className=" space-y-3
                        bg-gradient-to-r from-indigo-800 to-purple-800
                        menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {user.displayName && (
                    <li className="text-center text-2xl font-bold">
                      {user.displayName}
                    </li>
                  )}
                  <li className="text-center">{user.email}</li>
                  <button onClick={() => logOut()} className="btn btn-primary">
                    Logout
                  </button>
                </ul>
              </div>
            </div>
          ) : (
            <div className="ml-4">
              {!user && (
                <button className="px-4 py-2 rounded bg-violet-600 hover:bg-violet-800 border-none text-white">
                  <Link to="/login">Login</Link>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
