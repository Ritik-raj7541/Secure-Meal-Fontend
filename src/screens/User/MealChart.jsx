import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import MealTable from '../../components/MealTable'
import {getAPIcalls} from '../../utils/apiCalls'
import SideNavbar from '../../components/SideNavbar'

const MealChart = () => {
  const [mealChart, setmealChart] = useState([])
  const fetching = async() => {
    const mid = 'operation/student/get-meal-timetable/' ;
    const email = JSON.parse(localStorage.getItem("cred")).email ;
    // console.log(email);
    const response = await getAPIcalls(mid, email) ;
    setmealChart(response.data) ;
  }
  useEffect(() => {
    fetching() ;
  }, [])


  return (
    <div className="flex h-screen overflow-hidden pb-4">
            <SideNavbar />
            <div className="flex flex-col flex-1 overflow-hidden">
                    <Navbar />
                <div className="flex-1  overflow-y-auto bg-gray-200 py-16 px-4">
                  <div className='text-3xl mx-4 font-bold text-right'>Meal Chart</div>
                {
      mealChart.length !== 0 ?(<MealTable mealChart={mealChart} />):("No file")
    }
                </div>

            </div>
        </div>
  )
}

export default MealChart