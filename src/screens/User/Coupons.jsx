import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { RiCoupon3Line } from 'react-icons/ri';
import Button from '../../components/Button';
import PopupBox from '../../components/PopupBox';
import CouponsCarousel from '../../components/CouponsCarousel';
import CouponSlider from '../../components/CouponSlider';
import SideNavbar from '../../components/SideNavbar';
import TimePicker from 'react-time-picker';

const Coupons = () => {
  const breakfast = () => {
    console.log(event.target.value);
  };

  const lunch = () => {
    console.log(event.target.value);
  };

  const snacks = () => {
    console.log(event.target.value);
  };

  const dinner = () => {
    console.log(event.target.value);
  };

  const generate = () => {
    console.log(event.target.value);
  };

  const images = [
    {
      url: 'https://pngimg.com/uploads/qr_code/qr_code_PNG25.png',
      meal: 'Breakfast',
    },
    {
      url: 'https://pngimg.com/uploads/qr_code/qr_code_PNG25.png',
      meal: 'Lunch',
    },
    {
      url: 'https://pngimg.com/uploads/qr_code/qr_code_PNG25.png',
      meal: 'Snacks',
    },
    {
      url: 'https://pngimg.com/uploads/qr_code/qr_code_PNG25.png',
      meal: 'Dinner',
    },
  ];

  const [isAdmin, setIsAdmin] = useState(() => {
    console.log(JSON.parse(localStorage.getItem("cred")).admin);
    JSON.parse(localStorage.getItem("cred")).admin;
  });

  useEffect(() => {
    setIsAdmin(JSON.parse(localStorage.getItem("cred")).admin)
  }, [])
  

  const [formData, setFormData] = useState({
    mealOneS: '',
    mealOneE: '',
    mealTwoS: '',
    mealTwoE: '',
    mealThreeS: '',
    mealThreeE: '',
    mealFourS: '',
    mealFourE: '',
  });

  const handleInputChange = (meal, timeType, value) => {
    setFormData(prevData => ({
      ...prevData,
      [`${meal}${timeType}`]: value,
    }));
  };

  const generateJSON = () => {
    console.log(JSON.stringify(formData, null, 2));
  };

  const handleTest = () => {
    console.log(localStorage.getItem(cred));
  }

  return (

    <div className="flex h-screen overflow-hidden pb-4">
      <SideNavbar />
      <div className="flex flex-col flex-1 lg:overflow-hidden">
        <Navbar />
        <div className="flex-1  overflow-y-auto bg-gray-200 py-16 px-4 ">
          <div className='text-right text-3xl font-bold mx-4 lg:mb-0 mb-16'>
            <div >Your Coupons</div>
          </div>
          {isAdmin===true ?
            (
              
            <div>
              <div className='text-2xl font-bold mb-8'>Generate Meal</div>
              <div className='flex justify-center items-center text px-8 '>
                <form action="">
                  <div className="grid grid-cols-1 items-center">
                    <label className='text-xl font-bold'>Breakfast</label>
                    <div className='grid grid-cols-2 gap-24'>
                      <div>
                        <label htmlFor="mealOneS" className="mb-2">Select start time:</label>
                        <input
                          type="time"
                          id="mealOneS"
                          name="mealOneS"
                          className="border p-2 mb-4"
                          onChange={(e) => handleInputChange('mealOne', 'S', e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="mealOneE" className="mb-2">Select end time:</label>
                        <input
                          type="time"
                          id="mealOneE"
                          name="mealOneE"
                          className="border p-2 mb-4"
                          onChange={(e) => handleInputChange('mealOne', 'E', e.target.value)}
                        />
                      </div>
                    </div>

                    <label className='text-xl font-bold'>Lunch</label>
                    <div className='grid grid-cols-2 gap-24'>
                      <div>
                        <label htmlFor="mealTwoS" className="mb-2">Select start time:</label>
                        <input
                          type="time"
                          id="mealTwoS"
                          name="mealTwoS"
                          className="border p-2 mb-4"
                          onChange={(e) => handleInputChange('mealTwo', 'S', e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="mealTwoE" className="mb-2">Select end time:</label>
                        <input
                          type="time"
                          id="mealTwoE"
                          name="mealTwoE"
                          className="border p-2 mb-4"
                          onChange={(e) => handleInputChange('mealTwo', 'E', e.target.value)}
                        />
                      </div>
                    </div>

                    <label className='text-xl font-bold'>Snacks</label>
                    <div className='grid grid-cols-2 gap-24'>
                      <div>
                        <label htmlFor="mealOneS" className="mb-2">Select start time:</label>
                        <input
                          type="time"
                          id="mealOneS"
                          name="mealOneS"
                          className="border p-2 mb-4"
                          onChange={(e) => handleInputChange('mealThree', 'S', e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="mealOneE" className="mb-2">Select end time:</label>
                        <input
                          type="time"
                          id="mealOneE"
                          name="mealOneE"
                          className="border p-2 mb-4"
                          onChange={(e) => handleInputChange('mealThree', 'E', e.target.value)}
                        />
                      </div>
                    </div>

                    <label className='text-xl font-bold'>Dinner</label>
                    <div className='grid grid-cols-2 gap-24'>
                      <div>
                        <label htmlFor="mealOneS" className="mb-2">Select start time:</label>
                        <input
                          type="time"
                          id="mealOneS"
                          name="mealOneS"
                          className="border p-2 mb-4"
                          onChange={(e) => handleInputChange('mealFour', 'S', e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="mealOneE" className="mb-2">Select end time:</label>
                        <input
                          type="time"
                          id="mealOneE"
                          name="mealOneE"
                          className="border p-2 mb-4"
                          onChange={(e) => handleInputChange('mealFour', 'E', e.target.value)}
                        />
                      </div>
                    </div>


                    {/* Repeat similar structure for mealThree and mealFour sections */}

                    <button
                      type="button"
                      onClick={generateJSON}
                      className=" px-4 py-2 rounded-lg  bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Generate
                    </button>
                  </div>
                </form>
              </div>
            </div>
            )
            :

            (<CouponSlider
              images={[
                {
                  url: 'https://pngimg.com/uploads/qr_code/qr_code_PNG25.png',
                  meal: 'Breakfast',
                },
                {
                  url: 'https://pngimg.com/uploads/qr_code/qr_code_PNG25.png',
                  meal: 'Lunch',
                },
                {
                  url: 'https://pngimg.com/uploads/qr_code/qr_code_PNG25.png',
                  meal: 'Snacks',
                },
                {
                  url: 'https://pngimg.com/uploads/qr_code/qr_code_PNG25.png',
                  meal: 'Dinner',
                },
              ]}
            />)


          }
        </div>

      </div>
    </div>
  );
};

export default Coupons;
