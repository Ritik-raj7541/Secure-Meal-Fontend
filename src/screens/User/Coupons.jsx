import React, { useState } from 'react';
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

  const [isAdmin, setIsAdmin] = useState(false);

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

  return (

    <div className='flex '>
      <div className=''>
        {/* Set the height of the SideNavbar to 100% */}
        <div className=''>
          <SideNavbar />
        </div>
      </div>
      <div className=''>
        <Navbar />
        <div className='text-left text-2xl'>
          <div className='m-4'>Your Coupons</div>
        </div>
        {isAdmin ? <CouponSlider
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
        />
          :

          <div>
            <div className='text-2xl'>Generate Meal</div>
            <div className='flex justify-center items-center text px-16 '>
              <form action="">
                <div className="grid grid-cols-1 items-center">
                  <label>Breakfast</label>
                  <div className='grid grid-cols-2'>
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

                  <label>Lunch</label>
                  <div className='grid grid-cols-2'>
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

                  <label>Snacks</label>
                  <div className='grid grid-cols-2'>
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

                  <label>Dinner</label>
                  <div className='grid grid-cols-2'>
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
                    className="bg-green-400 text-white px-4 py-2"
                  >
                    Generate
                  </button>
                </div>
              </form>
            </div>
          </div>


          // <div>
          //   <div className='text-2xl'>
          //     Generate Meal
          //   </div>
          //   <div className='flex justify-center items-center text px-16 '>

          //     <form action="">
          //       <div className="grid grid-cols-1 items-center  ">
          //         <label>Breakfast</label>
          //         <div className='grid grid-cols-2'>
          //           <div>
          //             <label htmlFor="start" className="mb-2">Select start time:</label>
          //             <input type="time" id="start" name="startTime" className="border p-2 mb-4" />
          //           </div>
          //           <div>
          //             <label htmlFor="end" className="mb-2">Select end time:</label>
          //             <input type="time" id="end" name="endTime" className="border p-2 mb-4" />
          //           </div>
          //         </div>

          //         <label>Lunch</label>
          //         <div className='grid grid-cols-2'>
          //           <div>
          //             <label htmlFor="start" className="mb-2">Select start time:</label>
          //             <input type="time" id="start" name="startTime" className="border p-2 mb-4" />
          //           </div>
          //           <div>
          //             <label htmlFor="end" className="mb-2">Select end time:</label>
          //             <input type="time" id="end" name="endTime" className="border p-2 mb-4" />
          //           </div>
          //         </div>


          //         <label>Snacks</label>
          //         <div className='grid grid-cols-2'>
          //           <div>
          //             <label htmlFor="start" className="mb-2">Select start time:</label>
          //             <input type="time" id="start" name="startTime" className="border p-2 mb-4" />
          //           </div>
          //           <div>
          //             <label htmlFor="end" className="mb-2">Select end time:</label>
          //             <input type="time" id="end" name="endTime" className="border p-2 mb-4" />
          //           </div>
          //         </div><label>Dinner</label>
          //         <div className='grid grid-cols-2'>
          //           <div>
          //             <label htmlFor="start" className="mb-2">Select start time:</label>
          //             <input type="time" id="start" name="startTime" className="border p-2 mb-4" />
          //           </div>
          //           <div>
          //             <label htmlFor="end" className="mb-2">Select end time:</label>
          //             <input type="time" id="end" name="endTime" className="border p-2 mb-4" />
          //           </div>
          //         </div>



          //         <Button value="Generate" type="submit" className="bg-green-400 text-white px-4 py-2" />
          //       </div>
          //     </form>
          //   </div>
          // </div>


        }

        {/* <PopupBox /> */}
      </div>
    </div>
  );
};

export default Coupons;
