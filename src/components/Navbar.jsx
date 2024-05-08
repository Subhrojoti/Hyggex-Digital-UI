import React from "react";
import logo from "../assets/logo.png";
import "../styles/navbar.css";

const Navbar = () => {
  const navLinks = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Flashcard",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
    {
      name: "FAQ",
      link: "#",
    },
  ];
  return (
    <nav>
      <div className="flex justify-between">
        <div className="flex items-center mt-[32px] ">
          <img src={logo} />
        </div>
        <div className="flex gap-5 items-center w-[525px] h-[48px] mt-[27px]">
          <ul className="navItems flex gap-8">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <button className="login-btn w-[128px] h-[48px] flex items-center bg-slate-500 justify-center rounded-3xl text-white ml-[10px]">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
