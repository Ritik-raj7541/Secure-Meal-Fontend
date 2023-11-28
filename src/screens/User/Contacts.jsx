import React from 'react'
import Navbar from '../../components/Navbar'
import SideNavbar from '../../components/SideNavbar'

const Contacts = () => {
  return (
    <div className="flex h-screen overflow-hidden pb-4">
            <SideNavbar />
            <div className="flex flex-col flex-1 overflow-hidden">
                    <Navbar />
                <div className="flex-1  overflow-y-auto bg-gray-200 py-16 px-4 ">
                <div className='font-bold text-right text-3xl mx-4'>
                  Contacts
                </div>
                </div>

            </div>
        </div>
  )
}

export default Contacts