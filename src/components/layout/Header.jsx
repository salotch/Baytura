import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Auth from "../Auth";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // mobile menu state

  return (
    <>
      <nav className="cairo-font bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 px-9">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/src/assets/Rectangle.jpg"
              className="h-8"
              alt="Baytura logo"
            />
            <div className="flex-col space-y-0">
              <span className="self-center block font-bold whitespace-nowrap text-primary">
                BAYT AURA
              </span>
              <span className="text-beige block text-xs">REAL STATE</span>
            </div>
          </Link>

          {/* Right side buttons */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                setShowModal(true);
              }}
              className="text-primary cursor-pointer font-semibold rounded-lg text-sm px-4 py-2 text-center "
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                setShowModal(true);
              }}
              className="text-white cursor-pointer bg-primary font-semibold hover:text-beige focus:ring-4 focus:outline-none rounded-lg text-sm px-4 py-2 text-center "
            >
              Get started
            </button>

            {/* Mobile toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex cursor-pointer items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navbar links */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-beige block py-2 px-3 hover:text-beige md:p-0"
                      : "text-primary block py-2 px-3 hover:text-beige md:p-0"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Properties"
                  className={({ isActive }) =>
                    isActive
                      ? "text-beige block py-2 px-3 hover:text-beige md:p-0"
                      : "text-primary block py-2 px-3 hover:text-beige md:p-0"
                  }
                >
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Services"
                  className={({ isActive }) =>
                    isActive
                      ? "text-beige block py-2 px-3 hover:text-beige md:p-0"
                      : "text-primary block py-2 px-3 hover:text-beige md:p-0"
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    isActive
                      ? "text-beige block py-2 px-3 hover:text-beige md:p-0"
                      : "text-primary block py-2 px-3 hover:text-beige md:p-0"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-beige block py-2 px-3 hover:text-beige md:p-0"
                      : "text-primary block py-2 px-3 hover:text-beige md:p-0"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <Auth
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
    </>
  );
}
