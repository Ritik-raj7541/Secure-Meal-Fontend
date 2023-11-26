import React from 'react'
import Navbar from '../../components/Navbar'
import { RiCoupon3Line } from "react-icons/ri";
import Button from "../../components/Button";
import PopupBox from '../../components/PopupBox';
import CouponsCarousel from '../../components/CouponsCarousel';
import CouponSlider from '../../components/CouponSlider';

const Coupons = () => {

  const breakfast = () => {
    console.log(event.target.value)
  }

  const lunch = () => {
    console.log(event.target.value)
  }

  const snacks = () => {
    console.log(event.target.value)
  }

  const dinner = () => {
    console.log(event.target.value)
  }

  const generate = () => {
    console.log(event.target.value)
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 gap-4 place-items-center h-56 py-12">
        <div className='m-4 text-3xl'>Your Coupons</div>

        {/* <ul className='container'>
          <li className='item'>
          <RiCoupon3Line className="text-9xl text-center" />
          </li>
          <li className='item'>
          <RiCoupon3Line className="text-9xl text-center" />
          </li>
          <li className='item'>
          <RiCoupon3Line className="text-9xl text-center" />
          </li>
        </ul> */}

<CouponSlider
        images={[
          {
            url:"https://pngimg.com/uploads/qr_code/qr_code_PNG25.png",
            meal: "Breakfast"
          },
          {
            url:"https://pngimg.com/uploads/qr_code/qr_code_PNG25.png",
            meal: "Lunch"
          },
          {
            url:"https://pngimg.com/uploads/qr_code/qr_code_PNG25.png",
            meal: "Snacks"
          },
          {
            url:"https://pngimg.com/uploads/qr_code/qr_code_PNG25.png",
            meal: "Dinner"
          },
        ]}
      />
        
        {/* <CouponSlider />
        <div className='flex justify-evenly w-2/5'>
          <Button label="Breakfast" handleClick={breakfast} />
          <Button label="Lunch" handleClick={lunch} />
          <Button label="Snacks" handleClick={snacks} />
          <Button label="Dinner" handleClick={dinner} />
        </div> */}
        <PopupBox />
      </div>


    </>

  )
}

export default Coupons