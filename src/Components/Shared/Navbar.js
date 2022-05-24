import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

function Navbar() {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken')
  };

  const route = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/blog"}>Blog</NavLink>
      </li>
      <li>
        <NavLink to={"/portfolio"}>My Portfolio</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-accent  lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2"
          >
            {route}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          Cavalry-Parts
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 p-0">{route}</ul>
      </div>

      <div className="navbar-end gap-2">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={
                      user.photoURL ||
                      "https://api.lorem.space/image/face?hash=33791"
                    }
                    alt=""
                  />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 gap-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <p className="font-bold text-xl">{user?.displayName}</p>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn text-white btn-primary"
                  >
                    Signout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to={"/login"} className="btn btn-md btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
