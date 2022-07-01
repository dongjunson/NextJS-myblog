import navlinks from "../data/navlinks";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Nav = () => {
  const path = useRouter().pathname;
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((menu) => !menu);
  };
  return (
    <div className={`flex flex-row`}>
      <div className={`mr-5`}>
        <Link href={"/"} key={"Home"}>
          <a className={`hover:text-green-400`}>Home</a>
        </Link>
      </div>
      <button
        onClick={toggleMenu}
        className={`hover:text-green-400 ${menu ? "text-green-400" : ""}`}
      >
        Menu
      </button>
      <div
        className={`${
          menu ? "absolute top-20 right-0 bg-white z-10" : "hidden"
        } pl-5 rounded-l-lg`}
      >
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title}>
            <div className={`hover:cursor-pointer hover:text-green-400`}>
              <a
                className={`mr-5 ${nav.link === path ? "text-green-400" : ""}`}
              >
                {nav.title}
              </a>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
