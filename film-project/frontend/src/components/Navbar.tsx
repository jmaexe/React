import React, { useContext, useState } from 'react';
import ProfilePage from '../pages/ProfilePage';
import { UserContext, UserContextType } from '../hooks/userContext';
import { useUserContext } from '../hooks/hooks';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  const { user, setUser } = useUserContext();
  return (
    <>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={'home'}>Home</Link>
              </li>
              <li>
                <Link to={'characters'}>Characters</Link>
              </li>
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" to={'home'}>
            Marvel Comics
          </Link>
        </div>
        <div className="navbar-center max-sm:hidden">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={'home'}>Home</Link>
            </li>
            <li>
              <Link to={'characters'}>Characters</Link>
            </li>
            <li>
              {user ? (
                <button
                  className="btn btn-primary btn-outline btn-sm h-full"
                  onClick={() => setUser(undefined)}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to={'login'}
                  className="btn btn-primary btn-outline btn-sm h-full"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <div
              className="avatar hover:cursor-pointer"
              tabIndex={0}
              role="button"
            >
              {user && (
                <div className="w-12 rounded-full">
                  <Link to={'profile'}>
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                      className="hover:opacity-60"
                    />
                  </Link>
                </div>
              )}
            </div>
            {/* <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow items-center justify-center"
              >
                <li>
                  <Link to={'profile'}>My profile</Link>
                </li>
                <li>
                  <button className="btn btn-primary btn-outline btn-sm">
                    Logout
                  </button>
                </li>
              </ul> 
            </div> */}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
