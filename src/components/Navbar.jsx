import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import clsx from "clsx";


import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LuUserCircle2 } from "react-icons/lu";
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import Button from "./Button";
import DropdownMenu from "./DropDownMenu";

export const Navbar = () => {
    const [isSideMenuOpen, setMenu] = useState(false);



  const navlinks = [
    {
      label: "Dashboard",
      link: "/user-dashboard"
    },
    {
      label: "Coupons",
      link: "/coupons"
    },
    {
      label: "Meal Chart",
      link: "/mealchart"
    },
    {
      label: "Complains",
      link: "/complains"
    },
    {
      label: "Contacts",
      link: "/contacts"
    }
  ];

  return (
    
    <main className="px-2 py-1 lg:py-2 shadow-lg  fixed w-full bg-white z-50">
      
      <nav className="flex justify-between place-items-center" >
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            
            <HiOutlineMenuAlt1
              onClick={() => setMenu(true)}
              className="text-2xl cursor-pointer lg:hidden"
            />
            <Link href={"/"} className="text-4xl font-mono">
              <img src="/bit-logo.png" className="h-8 "/>
            </Link>
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block hover:text-black"
              to={d.link}
            >
              {d.label}
            </Link>
          ))}
        </div>

        {/* sidebar mobile menu */}
        <div
          // className={clsx(
          //   " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
          //   isSideMenuOpen && "translate-x-0"
          // )}
          className={clsx(
            "sidebar shadow-xl  left-0 text-whitez-1 ease-in-out duration-300 fixed h-full w-full lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-full p-4  gap-8 z-50 w-56 flex  ">
          <div className="right-0">
          <HiOutlineMenuAlt1  onClick={() => setMenu(false)} className="relative z-50 flex items-center cursor-pointer text-2xl left-44"
                />
          </div>
          

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" to={d.link}>
                {d.label}
              </Link>
            ))}
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* cart icon */}
          {/* <LuUserCircle2  className="text-3xl" /> */}
          <DropdownMenu />
          
          {/* avtar img */}
        </section>
      </nav>
      <hr className=" " />
    </main>
  );
}

export default Navbar;
