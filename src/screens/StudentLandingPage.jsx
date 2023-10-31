import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { LuCircleDotDashed } from 'react-icons/lu'
import { BiPoll } from 'react-icons/bi'
import { MdOutlineBreakfastDining, MdOutlineLunchDining, MdOutlineFreeBreakfast, MdOutlineDinnerDining } from 'react-icons/md'
import { RiArrowDropRightLine } from 'react-icons/ri'
import { MdNotificationsNone } from 'react-icons/md'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Checkbox } from "@material-tailwind/react";

import { useState } from "react";
import Sidebar from '../components/Sidebar/Sidebar'



export default function StudentLandingPage() {

  const [isGenerated, setisGenerated] = useState(false);



  return (
    <div>
      <Navbar />
      <div className="h-screen w-full flex md:flex-1 overflow-hidden select-none ">
        {/* <nav className="lg:w-24  flex-col items-center bg-white dark:bg-gray-800 py-4  lg:flex md:w-64 md:flex-col hidden">

          <ul className="mt-2 text-gray-700 dark:text-gray-400 capitalize">

            <li className="mt-3 p-2 text-blue-600 dark:text-blue-300 rounded-lg">
              <a href="#" className=" flex flex-col items-center">
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9
							17v2H5v-2h4M21 3h-8v6h8V3M11 3H3v10h8V3m10
							8h-8v10h8V11m-10 4H3v6h8v-6z"></path>
                </svg>
                <span className="text-xs mt-2">dashBoard</span>
              </a>

            </li>

            <li
              className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg">
              <a href="#" className=" flex flex-col items-center">
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M23 3v-.5a2.5 2.5 0 00-5 0V3c-.55 0-1 .45-1 1v4c0
							.55.45 1 1 1h5c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1
							0h-3v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V3M6
							11h9v2H6v-2m0-4h9v2H6V7m16 4v5c0 1.11-.89 2-2 2H6l-4
							4V4a2 2 0 012-2h11v2H4v13.17L5.17 16H20v-5h2z"></path>
                </svg>
                <span className="text-xs mt-2">messages</span>
              </a>

            </li>



            <li
              className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg">
              <a href="#" className=" flex flex-col items-center">
                <svg className="fill-current h-5 w-5" viewBox="0 0 512 512">
                  <path
                    d="M505 442.7L405.3
							343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
							44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208
							208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7
							17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
							0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
							0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128
							57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
                <span className="text-xs mt-2">Meal Chart</span>
              </a>

            </li>

            <li
              className="mt-3 p-2 hover:text-blue-600 dark-hover:text-blue-300
				rounded-lg">
              <a href="#" className=" flex flex-col items-center">
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M19 19H5V8h14m0-5h-1V1h-2v2H8V1H6v2H5a2 2 0 00-2
							2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2m-2.47
							8.06L15.47 10l-4.88 4.88-2.12-2.12-1.06 1.06L10.59
							17l5.94-5.94z"></path>
                </svg>
                <span className="text-xs mt-2">Complains</span>
              </a>

            </li>

            <li className="mt-3 p-2 hover:text-blue-600 rounded-lg">
              <a
                href="#"
                className=" flex flex-col items-center">
                <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M17 10.5V7a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0
							001 1h12a1 1 0 001-1v-3.5l4 4v-11l-4 4z"></path>
                </svg>
                <span className="text-xs mt-2">Contact</span>
              </a>

            </li>

          </ul>

          <div
            className="mt-auto flex items-center p-2 text-blue-700 bg-purple-200
			dark:text-blue-500 rounded-full">

            <a href="#">
              <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M12 1c-5 0-9 4-9 9v7a3 3 0 003 3h3v-8H5v-2a7 7 0 017-7
						7 7 0 017 7v2h-4v8h4v1h-7v2h6a3 3 0
						003-3V10c0-5-4.03-9-9-9z"></path>
              </svg>
            </a>

          </div>

        </nav> */}
        {
          window.screen.width> 768?
          <div>
          <Sidebar toggle='true'/>
        </div>
        :
        <div className='py-24'><Sidebar toggle='false'/></div>
        }
        
        <div>

        </div>
        <main
          className="my-1 pt-2 pb-2 px-10 flex-1  bg-gray-100  rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto ">
          <div className="flex flex-col capitalize text-3xl">
            <span className="font-semibold">hello,</span>
            <span>Name</span>

          </div>
          <div></div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {
              isGenerated ?
                <div className="start-0 mr-6 w-1/2 h-1/2 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
                dark:bg-gray-300 rounded-lg ">
                  <h1>Generate Coupons For Meals</h1>
                  {/* <Checkbox id="ripple-on" label="Breakfast" ripple={true} />
                  <Checkbox id="ripple-off" label="Lunch" ripple={true} />
                  <Checkbox id="ripple-off" label="Snacks" ripple={true} />
                  <Checkbox id="ripple-off" label="Dinner" ripple={true} /> */}

                  <form className='text-left mx-10'>
                    {/* <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                  <label for="vehicle1"> Breakfast</label><br></br> */}
                    <Checkbox className='mx-4' label="Breakfast" /><br></br>
                    <Checkbox className='mx-4' label="Lunch" /><br></br>
                    <Checkbox className='mx-4' label="Snacks" /><br></br>
                    <Checkbox className='mx-4' label="Dinner" /><br></br>
                    <input className='bg-gray-600 text-white p-2 mx-4' type='submit' value="Submit" />
                  </form>

                </div>
                :
                <div
                  >

                  <h3
                    className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize dark:text-gray-600">
                    <span>Your Coupons</span>
                    <button className="ml-2">
                      <RiArrowDropRightLine className='h-10 w-10' />
                    </button>
                  </h3>

                  <div>
                    <img src='https://www.pngmart.com/files/10/Qr-Code-Background-PNG.png' />
                  </div>

                </div>
            }


            <div
              className="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col
				bg-gray-600 rounded-lg text-white text-left">

              <h3
                className="flex items-center pt-1 pb-1 px-8 text-lg font-bold
					capitalize">
                <span>Todays Meal</span>
                <button className="ml-2">
                  <RiArrowDropRightLine className='h-10 w-10' />
                </button>
              </h3>
              <div className='mx-10'>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                  <li>Item 4</li>
                  <li>Item 5</li>
                  <li>Item 6</li>
                </ul>
              </div>
            </div>

          </div>

        </main>

        <aside
          className="w-1/4 my-1 mr-1 px-6 py-4 flex flex-col bg-gray-200 dark:bg-gray-800
		dark:text-gray-400 rounded-r-lg overflow-y-auto">


          <span className="mt-4 text-gray-600">Your Balance</span>
          <span className="mt-1 text-3xl font-semibold">$ 1,579.20</span>

          <button
            className="mt-8 flex items-center py-4 px-3 text-white rounded-lg
			bg-green-400 shadow focus:outline-none">

            <BiPoll className='w-10' />

            <span>Request For change Meal</span>

          </button>

          <div className="mt-12 flex items-center">
            <span>Your Recent Meals</span>
            <button className="ml-2 focus:outline-none">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 256 512">
                <path
                  d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
						0l-22.6-22.6c-9.4-9.4-9.4-24.6
						0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3
						103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1
						34z"></path>
              </svg>
            </button>
          </div>

          <a
            href="#"
            className="mt-8 p-4 flex justify-between bg-gray-300 rounded-lg
			font-semibold capitalize">

            <div className="flex">

              <MdOutlineDinnerDining className='h-10' />
              <div className="flex flex-col ml-4">

                <span>Dinner</span>
                <span className="text-sm text-gray-600">date</span>

              </div>

            </div>

            <span>$ 25</span>

          </a>

          <a
            href="#"
            className="mt-2 p-4 flex justify-between bg-gray-300 rounded-lg
			font-semibold capitalize">

            <div className="flex">

              <MdOutlineFreeBreakfast className='h-10' />

              <div className="flex flex-col ml-4">

                <span>Snacks</span>
                <span className="text-sm text-gray-600">date</span>

              </div>

            </div>

            <span>$ 25</span>

          </a>

          <a
            href="#"
            className="mt-2 p-4 flex justify-between bg-gray-300 rounded-lg
			font-semibold capitalize">

            <div className="flex">

              <MdOutlineLunchDining className='h-10' />

              <div className="flex flex-col ml-4">

                <span>Lunch</span>
                <span className="text-sm text-gray-600">date</span>

              </div>

            </div>

            <span>$ 25</span>

          </a>

          <a
            href="#"
            className="mt-2 p-4 flex justify-between bg-gray-300 rounded-lg
			font-semibold capitalize">

            <div className="flex">

              <MdOutlineBreakfastDining className='h-10' />

              <div className="flex flex-col ml-4">

                <span>Breakfast</span>
                <span className="text-sm text-gray-600">date</span>

              </div>

            </div>

            <span>$ 25</span>

          </a>

          <div className="mt-4 flex justify-center capitalize text-blue-600">
            <a href="#">see all</a>
          </div>

        </aside>

      </div>
    </div>
  )
}
