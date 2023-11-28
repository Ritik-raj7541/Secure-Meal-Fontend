import React from "react";
import Navbar from "../../components/Navbar";
import Popup from "reactjs-popup";
import SideNavbar from "../../components/SideNavbar";
import { LuUserCircle2 } from "react-icons/lu";


const UserDashboard = () => {
    return (
        <div className="flex h-screen overflow-hidden pb-4">
            <SideNavbar />
            <div className="flex flex-col flex-1 overflow-hidden">
                    <Navbar />
                <div className="flex-1  overflow-y-auto bg-gray-200 py-14 ">
                    <div className="text-left mx-4 ">
                        <div className="text-2xl">Aditya Marandi</div>
                        <div className="">BTECH/10035/20</div>
                    </div>

                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 px-4 mt-2 ">
                        <div>
                            <div className="shadow-md bg-green-500 text-left flex justify-between px-6 py-4 lg:h-16 rounded-lg text-white">
                                <div className="text-md">Your Balance:</div>
                                <div className="text-md">Rs. 25000</div>
                            </div>
                            <div className="shadow-md bg-red-100 text-left flex justify-between px-6 py-4 mt-4 rounded-lg">
                                <div className="">
                                    <div className="text-xl">Notice:</div>
                                    <div className="text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda quam quisquam molestias necessitatibus, iure consectetur vitae autem porro quod quia labore qui fugit quasi? Magnam pariatur esse dolor a!
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-md bg-gray-100 rounded-lg">

                            <div className="my-4">Vote for change</div>
                        </div>
                        </div>

                        <div className="shadow-md bg-gray-100 rounded-lg">
                            <img src="https://pngimg.com/uploads/qr_code/qr_code_PNG25.png" />
                        </div>
                        <div className="shadow-md bg-gray-100 rounded-lg">
                            <div className="my-4">Today's Meal</div>
                            <ul className="text-left mx-8">
                                <li>
                                    Breakfast
                                    <ul>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                    </ul>
                                </li>
                                <li>
                                    Lunch
                                    <ul>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                    </ul>
                                </li>
                                <li>
                                    Snacks
                                    <ul>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                    </ul>
                                </li>
                                <li>
                                    Dinner
                                    <ul>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                        <li>Idli</li>
                                    </ul>
                                </li>


                            </ul>
                        </div>
                        

                    </div>

                    <Popup />

                </div>

            </div>
        </div>

    )
}

export default UserDashboard