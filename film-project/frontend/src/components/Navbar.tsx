import React, { useState } from 'react';
import Profile from '../pages/Profile';

const Navbar = () => {
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
                <a>Home</a>
              </li>
              <li>
                <a>Comics</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl ">Marvel Comics</a>
        </div>
        <div className="navbar-center max-sm:hidden">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Comics</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
              <div
                className="avatar hover:cursor-pointer"
                tabIndex={0}
                role="button"
              >
                <div className="w-12 rounded-full">
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="hover:opacity-60"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow items-center justify-center"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <button className="btn btn-primary btn-outline btn-sm">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
