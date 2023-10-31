import React, {useState} from 'react'
import { fetchApiGet, fetchApiPost } from '../utils/apiCalls';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [credentials, setcredentials] = useState({}) ;
  const [registerError, setregisterError] = useState("") ;
  let navigate = useNavigate();
  const onChange = (e) => {
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };
  const handleSubmission = async (e) =>{
    e.preventDefault() ;
    const defaultUrl = import.meta.env.VITE_API_URL;
    const url = defaultUrl + 'auth/student/register' ;
    const response = await fetchApiPost(url, credentials) ;
    if(response.status === 200){
        navigate("/student-landing-page");
    }
    else{
        setregisterError("Some fields are missing or incorrect!!") ;
    }
  }
  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items- center pt-6 sm:pt-0">
            <div className="w-full sm:max-w-md p-5 mx-auto">
                <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
                <form onSubmit={handleSubmission}>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="email">Email-Address</label>
                        <input id="email" type="email" name="email" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" onChange={onChange}/>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                        onChange={onChange} />
                    </div>
                    {/* <div className="mb-4">
                        <label className="block mb-1" htmlFor="password">Confirm Password</label>
                        <input id="password" type="password" name="password" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" />
                    </div> */}
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="name">Name</label>
                        <input id="name" type="text" name="name" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                        onChange={onChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="roll">Roll Number</label>
                        <input id="roll" type="text" name="roll" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" 
                        onChange={onChange}/>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="branch">Branch</label>
                        <input id="branch" type="text" name="branch" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full" 
                        onChange={onChange}/>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1" htmlFor="number">Phone Number</label>
                        <input id="number" type="number" name="number" className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
                        onChange={onChange} />
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" type="checkbox" className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                            <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900"> Remember me </label>
                        </div>
                        <a href="#" className="text-sm"> Forgot your password? </a>
                    </div>
                    <div className="mt-6">
                        {registerError}
                        <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Register</button>
                    </div>
                    <div className="mt-6 text-center">
                        <a href="/login" className="underline">Sign up for an account</a>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Register