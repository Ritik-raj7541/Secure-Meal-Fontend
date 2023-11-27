import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import MealTable from '../../components/MealTable'
import {getAPIcalls} from '../../utils/apiCalls'

const MealChart = () => {
  const [mealChart, setmealChart] = useState([])
  const fetching = async() => {
    const mid = 'operation/student/get-meal-timetable/' ;
    const email = '1@gmail.com' ;
    const response = await getAPIcalls(mid, email) ;
    setmealChart(response.data) ;
  }
  useEffect(() => {
    fetching() ;
  }, [])


  return (
    <>
    <Navbar />
    {
      mealChart.length !== 0 ?(<MealTable mealChart={mealChart} />):("No file")
    }
    
    </>
  )
}

export default MealChart