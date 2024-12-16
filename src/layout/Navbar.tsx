import React from "react";
import Logo from "../../public/images/logo.svg";
import Avt from "../../public/images/user.svg";
import { NavBarData } from "./utils/utils";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <React.Fragment>
      <nav className="h-22 navbar-bg z-[99] border-b-2  fixed w-100 px-3">
        <div className="flex justify-between align-items-center mt-4 mb-2">
          <div>
            <img src={Logo} alt="logo" className="w-36" />
          </div>
          <div className="flex align-items-center gap-3">
            <div className="flex gap-2 align-items-center">
              <img src={Avt} alt="i" className="h-8 w-8 rounded-full" />
              <div className="leading-4">
                <p className="mb-0 f-12">Dharanitharan </p>
                <small className="f-10 c-gray">dharanitharan@gmail.com</small>
              </div>
              <svg
                className={`w-5 h-5 transition-transform ${
                  false ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex gap-3">
            {NavBarData.map((item) => (
              <li className="">
                <NavLink className="flex items-center p-2 gap-2" to={item.path}>
                  <item.icon /> {item.menu}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
