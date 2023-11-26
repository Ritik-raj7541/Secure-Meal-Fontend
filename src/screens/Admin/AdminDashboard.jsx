import React from 'react'
import QrCodeScanner from '../../components/QrCodeScanner'
import Navbar from '../../components/Navbar'
// import QrContainer from '../../components/QrContainer'

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className='py-20'>
        <QrCodeScanner />
        {/* <QrContainer /> */}
      </div>
      

    </div>
  )
}

export default AdminDashboard