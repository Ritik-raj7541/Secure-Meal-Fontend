import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { RiHome2Line } from "react-icons/ri";
import { RiCoupon3Line } from "react-icons/ri";
import { GiMeal } from "react-icons/gi";
import { FaNotEqual } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";

export const SideNavbar = () => {
    const [activeLink, setActiveLink] = useState("/user-dashboard");

    const navlinks = [
        {
            label: "Dashboard",
            link: "/user-dashboard",
            icon: <RiHome2Line className="text-xl mx-2" />,
        },
        {
            label: "Coupons",
            link: "/coupons",
            icon: <RiCoupon3Line className="text-xl mx-2" />,
        },
        {
            label: "Meal Chart",
            link: "/mealchart",
            icon: <GiMeal className="text-xl mx-2" />,
        },
        {
            label: "Complains",
            link: "/complains",
            icon: <FaNotEqual className="text-xl mx-2" />,
        },
        {
            label: "Contacts",
            link: "/contacts",
            icon: <TiContacts className="text-xl mx-2" />,
        }
    ];

    const handleLinkClick = (link) => {
        // Update the state after the click event has been processed
        setActiveLink(link);
    };

    useEffect(() => {
        // Update the state immediately after the click event has been processed
        setActiveLink(window.location.pathname);
    }, []);

    return (
        <div className=" shadow-lg bg-white text-left  justify-between  px-2 rounded-lg w-72 border-solid border-2 border-black hidden lg:block h-full m-2 "> 
            <div className="text-center">
                <div className="text-2xl mb-10">Secure Meal</div>
                <div>
                    {navlinks.map((d, i) => (
                        <Link
                            key={i}
                            className={`block rounded-lg m-2 p-4 w-64 text-center ${
                                activeLink === d.link
                                    ? "bg-black text-white"
                                    : "hover:text-black"
                            }`}
                            to={d.link}
                            onClick={() => handleLinkClick(d.link)}
                        >
                            <div className="flex">
                                {d.icon}
                                {d.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        
    );
}

export default SideNavbar;
