import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import MealTable from '../../components/MealTable'
import { getAPIcalls } from '../../utils/apiCalls'
import SideNavbar from '../../components/SideNavbar'
import TableInput from '../../components/TableInput'

const MealChart = () => {
  const [mealChart, setmealChart] = useState([])
  const fetching = async() => {
    const mid = 'operation/student/get-meal-timetable/' ;
    const email = JSON.parse(localStorage.getItem("userCred")).email ;
    // console.log(email);
    const response = await getAPIcalls(mid, email);
    setmealChart(response.data);
    console.log(response.data);
  }
  useEffect(() => {
    fetching();
  }, [])

  // const [tableInput, setInputOpen] = useState(false);
  // const [mealTable, setMealTable] = useState([mealChart]);
  
  const [isModalOpen, setModalOpen] = useState(false); // Your existing meal table

  const handleUpdateMealTable = (newData) => {
    
      setmealChart(newData);
      console.log(mealChart);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem("cred")).admin);

    // console.log(JSON.parse(localStorage.getItem("userCred")).admin)
    useEffect(() => {
      setIsAdmin(JSON.parse(localStorage.getItem("cred")).admin)
    }, [])

    // const handleChange = (e, index, mealType) => {
      
    // };

  return (
    <div className="flex h-screen overflow-hidden pb-4">
      <SideNavbar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Navbar />
        <div className="flex-1  overflow-y-auto bg-gray-200 py-16 px-4">
          <div className='text-3xl mx-4 font-bold text-right'>Meal Chart</div>
          {
            mealChart.length !== 0 ? (<MealTable mealChart={mealChart} />) : ("No file")
          }
          {
            isAdmin ? 
            <div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={openModal}
          >Update Meal</button>

          {isModalOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-8 rounded-lg">
                <TableInput handleUpdateMeal={handleUpdateMealTable} mealChart={mealChart} closeModal={closeModal} />
                <button
            className="bg-green-400 text-white px-4 py-2 rounded-md"
            onClick={handleUpdateMealTable}
          >Update Meal</button>
          <button
            className="bg-red-400 text-white px-4 py-2 mx-2 rounded-md"
            onClick={closeModal}
          >Cancel</button>
              </div>
            </div>
          )}
          </div>
          :
          ""
          }
          
          
          <div/>
        </div>

      </div>

    </div>
  )
}

export default MealChart