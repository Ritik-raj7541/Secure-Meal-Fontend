import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Popup from "reactjs-popup";
import SideNavbar from "../../components/SideNavbar";
import { LuUserCircle2 } from "react-icons/lu";
import QrCodeScanner from "../../components/QrCodeScanner";
import Loading from "../../components/Loading";
import Close from "../../components/close";
import Check from "../../components/Check";
// import Close from "../../components/Close";


const UserDashboard = () => {

    const [isScanQrCodePopupOpen, setScanQrCodePopupOpen] = useState(false);

    const openScanQrCodePopup = () => {
        setScanQrCodePopupOpen(true);
    };

    const closeScanQrCodePopup = () => {
        setScanQrCodePopupOpen(false);
    };

    //   const toggleScanQrCodePopup = () => {
    //     setScanQrCodePopupOpen(!isScanQrCodePopupOpen);
    //   };


    const [isAdmin, setIsAdmin] = useState(JSON.parse(localStorage.getItem("cred")).admin);

    // console.log(JSON.parse(localStorage.getItem("userCred")).admin)
    useEffect(() => {
        setIsAdmin(JSON.parse(localStorage.getItem("cred")).admin)
    }, [])


    const [showElement, setShowElement] = React.useState(true)
    useEffect(() => {
        setTimeout(function () {
            setShowElement(false)
        }, 3000);
    },
        [])

    // const [meal, setMeal] = useState([]);
    const meals = [
        {breakfast: 'omlete'},
        {lunch: 'chawal'},
        {snacks: 'samosa'},
        {dinner: 'biryani'}
    ]

    return (
        <div>
            {
                isAdmin ?
                    <div className="flex h-screen overflow-hidden pb-4">
                        <SideNavbar />
                        <div className="flex flex-col flex-1 overflow-hidden">
                            <Navbar />
                            <div className="flex-1 overflow-y-auto bg-gray-200 py-14 ">
                                <div className="text-left mx-4 ">
                                    <div className="text-2xl">{JSON.parse(localStorage.getItem("cred")).name}</div>
                                </div>

                                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 px-4 mt-2 ">
                                    <div>
                                        <div
                                            className="shadow-md bg-green-500 text-left flex justify-between px-6 py-4 lg:h-16 rounded-lg text-white cursor-pointer"
                                            onClick={openScanQrCodePopup}
                                        >
                                            <div className="text-md">Scan QR Code</div>
                                        </div>
                                        {/* <Loading /> */}
                                    </div>

                                    {/* ... Other content ... */}

                                </div>

                                {/* Scan QR Code Popup */}
                                <Popup
                                    open={isScanQrCodePopupOpen}
                                    onClose={closeScanQrCodePopup}
                                    modal
                                    contentStyle={{
                                        width: "80%",
                                        maxHeight: "80%",
                                        margin: "auto",
                                        padding: 0,
                                        borderRadius: "8px",
                                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                                        backgroundColor: "#fff",
                                        overflow: "hidden",
                                    }}
                                >
                                    <div className="w-full h-full p-4 flex flex-col justify-center items-center">
                                        {/* Your popup content goes here */}
                                        <QrCodeScanner />
                                        {/* Add your QR code scanning logic or any other content */}
                                        {/* <button
                                            className="px-4 py-2 rounded mt-4 bg-red-400 text-white hover:bg-red-500 focus:ring-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                                            onClick={closeScanQrCodePopup}
                                        >
                                            Close Popup
                                        </button> */}
                                        {showElement ?
                                            <div>
                                                {/* Your content goes here */}
                                                <Check onClick={setShowElement(false)} />
                                            </div> : ""
                                        }
                                        <div onClick={closeScanQrCodePopup}>
                                            <Close />
                                        </div>

                                    </div>
                                </Popup>
                            </div>
                        </div>
                    </div>

                    :

                    <div className="flex h-screen overflow-hidden pb-4">
                        <SideNavbar />
                        <div className="flex flex-col flex-1 overflow-hidden">
                            <Navbar />
                            <div className="flex-1  overflow-y-auto bg-gray-200 py-16  ">
                                <div className="text-right mx-4 ">
                                    <div className="text-3xl font-bold">{JSON.parse(localStorage.getItem("cred")).name}</div>
                                    <div className="">{JSON.parse(localStorage.getItem("cred")).roll}</div>
                                </div>

                                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 px-4 mt-2 ">
                                    <div>
                                        <div className="shadow-md bg-green-500 text-left flex justify-between px-6 py-4 lg:h-16 rounded-lg text-white">
                                            <div className="text-md">Your Balance:</div>
                                            <div className="text-md">Rs. 25000</div>
                                        </div>
                                        <div className="shadow-md bg-red-100 text-left flex justify-between px-6 py-4 mt-4 rounded-lg">
                                            <div className="">
                                                <div className="text-xl">Notice:</div>
                                                <div className="text-sm">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et assumenda quam quisquam molestias necessitatibus, iure consectetur vitae autem porro quod quia labore qui fugit quasi? Magnam pariatur esse dolor a!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="shadow-md bg-gray-100 rounded-lg">

                                            <div className="my-4">Vote for change</div>
                                        </div>
                                    </div>

                                    <div className="shadow-md bg-gray-100 rounded-lg">
                                        <img src="https://pngimg.com/uploads/qr_code/qr_code_PNG25.png" />
                                    </div>
                                    <div className="shadow-md bg-gray-100 rounded-lg">
                                        <div>
                                        <div>Breakfast:
                                            </div>
                                            {meals.breakfast}
                                    </div>
                                    <div className="shadow-md bg-gray-100 rounded-lg">
                                        <div>Lunch:
                                            </div>
                                            {meals.lunch}
                                    </div>
                                    <div className="shadow-md bg-gray-100 rounded-lg">
                                        <div>Snacks:
                                            </div>
                                            {meals.snacks}
                                    </div>
                                    <div className="shadow-md bg-gray-100 rounded-lg">
                                        <div>Dinner:
                                            </div>
                                            {meals.dinner}
                                    </div>
                                            </div>
                                        


                                </div>

                                <Popup />

                            </div>

                        </div>
                    </div>
            }
        </div>





    );
}

export default UserDashboard