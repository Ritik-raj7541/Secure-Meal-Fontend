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



export default function AdminLandingPage() {

  const [isGenerated, setisGenerated] = useState(false);



  return (
    <div>
      <Navbar />
      <div className="h-screen w-full flex overflow-hidden select-none">

        {
          window.screen.width > 768 ?
            <div>
              <Sidebar toggle='true' />
            </div>
            :
            <div className='py-24'><Sidebar toggle='false' /></div>
        }


        <main
          className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-100  rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">
          <div className="flex flex-col capitalize text-3xl">
            <span className="font-semibold">hello,</span>
            <span>Name</span>

          </div>
          <div className="flex">
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
                  className="mr-6 w-1/2 h-1/2 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
				dark:bg-gray-300 rounded-lg">

                  <h3
                    className="flex items-center pt-1 pb-1 px-8 text-lg font-semibold
					capitalize dark:text-gray-600">
                    <span>Set Time For Meals</span>
                    <button className="ml-2">
                      <RiArrowDropRightLine className='h-10 w-10' />
                    </button>
                  </h3>

                  <div className='text-left mx-10'>
                    <form action="">
                      <p><strong>Breakfast</strong></p>
                      <label>
                        Choose start time:
                        <input className='mx-2' label="Choose Time"
                          defaultValue="07:30"
                          type="time" />
                      </label><br></br>
                      <label className='my-2'>
                        Choose end time:
                        <input className='mx-2' label="Choose Time"
                          defaultValue="09:00"
                          type="time" />
                      </label><br></br>
                      <p><strong>Lunch</strong></p>
                      <label>
                        Choose start time:
                        <input className='mx-2' label="Choose Time"
                          defaultValue="12:30"
                          type="time" />
                      </label><br></br>
                      <label className='my-2'>
                        Choose end time:
                        <input className='mx-2' label="Choose Time"
                          defaultValue="14:00"
                          type="time" />
                      </label>
                      <p><strong>Snacks</strong></p>
                      <label>
                        Choose start time:
                        <input className='mx-2' label="Choose Time"
                          defaultValue="17:00"
                          type="time" />
                      </label><br></br>
                      <label className='my-2'>
                        Choose end time:
                        <input className='mx-2' label="Choose Time"
                          defaultValue="18:00"
                          type="time" />
                      </label><br></br>
                      <p><strong>Dinner</strong></p>
                      <label>
                        Choose start time:
                        <input className='mx-2' label="Choose Time"
                          defaultValue="20:30"
                          type="time" />
                      </label><br></br>
                      <label className='my-2'>
                        Choose end time:
                        <input className='mx-2' label="Choose Time"
                          defaultValue="22:00"
                          type="time" />
                      </label><br></br>
                      <input type='submit' className='p-2 bg-gray-600 text-white my-8'></input>

                    </form>

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


          <span className="mt-4 text-gray-600">Students Opted For Next Meal</span>
          <span className="mt-1 text-3xl font-semibold">200/250</span>

          <button
            className="mt-8 flex items-center py-4 px-3 text-white rounded-lg
			bg-green-400 shadow focus:outline-none">

            <BiPoll className='w-10' />

            <span>Meal Change Requests</span>

          </button>

          <div className="mt-8 flex items-center">
            <span>Ratings and Reviews</span>
            <button className="ml-2 focus:outline-none">
            <RiArrowDropRightLine className='h-10 w-10' />
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

            <span>⭐⭐⭐⭐⭐</span>

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

            <span>⭐⭐⭐</span>

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

            <span>⭐⭐⭐⭐</span>

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

            <span>⭐⭐</span>

          </a>

          <div className="mt-4 flex justify-center capitalize text-blue-600">
            <a href="#">see all</a>
          </div>

        </aside>

      </div>
    </div>
  )
}
