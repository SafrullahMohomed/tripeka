import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { getSignedRole, logout } from "../services/AuthAPIService";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const url = "";
  const handleClose = () => setNav(!nav);

  const [isSignedIn, setIsSignedIn] = useState(false);

  // getSignedRole()
  //   .then((role) => {
  //     if (role != null) {
  //       setIsSignedIn(true);
  //     }
  //   })
  //   .catch(() => {
  //     setIsSignedIn(false);
  //   });

  return (
    <div className="w-screen h-[80px] z-10 fixed">
      <div className="px-2 flex justify-between items-center w-full h-full bg-white">
        <div className="flex items-center">
          <a
            class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
            href={url}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-black mt-1.3 mr-2 rounded-full"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">TRAVEL.</h1>
          <ul className="hidden md:flex text-black cursor-pointer">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/testomonials">Testomonials</Link>
            </li>
            <li>
              <Link to="/places">Places</Link>
            </li>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          {isSignedIn && (
            <button
              className="border-none bg-transparent text-black mr-4"
              onClick={() => {
                logout();
              }}
            >
              Log out
            </button>
          )}
          {!isSignedIn && (
            <button className="border-none bg-transparent text-black mr-4">
              <Link to="/login">Sign in</Link>
            </button>
          )}
          {!isSignedIn && (
            <button className="px-8 py-3 bg-emerald-400">
              <Link to="/register">Sign up</Link>
            </button>
          )}
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul
        className={
          !nav ? "hidden" : "absolute bg-slate-50 w-full px-8 cursor-pointer"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/" onClick={handleClose}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/dashboard" onClick={handleClose}>
            Dashboard
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/services" onClick={handleClose}>
            Services
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/testomonials" onClick={handleClose}>
            Testomonials
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/places" onClick={handleClose}>
            Places
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/contactus" onClick={handleClose}>
            ContactUs
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link to="/ms" onClick={handleClose}>
            ms
          </Link>
        </li>

        <div className="flex flex-col my-4">
          {isSignedIn && (
            <button
              className="bg-transparent text-indigo-600 px-8 py-3 mb-4"
              onClick={() => {
                logout();
              }}
            >
              Log out
            </button>
          )}
          {!isSignedIn && (
            <Link to="/login" onClick={handleClose}>
              <button className="bg-transparent text-emerald-600 px-8 py-3 mb-4">
                Sign In
              </button>
            </Link>
          )}
          {!isSignedIn && (
            <Link to="/register" onClick={handleClose}>
              <button className="px-8 py-3">Sign Up</button>
            </Link>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
