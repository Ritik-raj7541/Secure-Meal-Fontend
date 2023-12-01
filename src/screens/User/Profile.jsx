import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import SideNavbar from '../../components/SideNavbar';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
// import numberModal from '../../components/numberModal';
// import ReviewModal from '../../components/ReviewModal'

const Profile = () => {

    const navigate = useNavigate();
    const handleLogout =  () =>{
            localStorage.removeItem("cred");
            navigate("/")
    }

    return (
        <div className="flex h-screen overflow-hidden pb-4">
            <SideNavbar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Navbar />
                <div className="flex-1  overflow-y-auto overflow-x-hidden bg-gray-200 py-16 px-4">
                    <div className="text-right mx-4 mb-8 lg:mb-4 font-bold">
                        <div className="text-3xl">Profile</div>
                    </div>
                    <div>
                        <div
                            class="max-w-2xl mx-4  sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-20 bg-white shadow-sm rounded-lg text-gray-900">
                           
                            <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                                <img class="object-cover object-center h-32" src='public/user.png' alt='Woman looking front' />
                            </div>
                            <div class="text-center mt-2">
                                <h2 class="font-semibold">Shivam Kumar</h2>
                            </div>


                            <div class="bg-white overflow-hidden shadow rounded-lg border">

                                <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                                    <dl class="sm:divide-y sm:divide-gray-200">
                                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Roll Number
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                BTECH/10028/20
                                            </dd>
                                        </div>
                                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Branch
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                CSE
                                            </dd>
                                        </div>
                                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Phone number
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                9876543210
                                            </dd>
                                        </div>
                                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Email Address
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                abc@gmail.com
                                            </dd>
                                        </div>
                                        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                            <dt class="text-sm font-medium text-gray-500">
                                                Hostel Number
                                            </dt>
                                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                12
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    <button
                      className="bg-red-400 text-white px-4 py-2 mx-2 mt-6 rounded-md"
                      onClick={handleLogout}
                    >Logout</button>
                </div>
            </div>




        </div>
    );
};

export default Profile;
