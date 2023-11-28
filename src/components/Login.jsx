// Login.js

import React, { useState } from "react";
import { FiUser, FiLock } from "react-icons/fi";
import { postAPIcalls } from "../utils/apiCalls";
import { useNavigate } from "react-router-dom";

const Login = ({ toggleRegistration }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate() ;

  const userLogin = async (e) =>{
    const mid = "auth/student/login";
    const email = "";

    const credentials = {
      email: username,
      password,
    };
    const response = await postAPIcalls(mid, email, credentials);
    if (response.status === 200) {
      localStorage.setItem("userCred", JSON.stringify(response.data)) ;
      navigate('/user-dashboard') ;
    } else {
      //not login successfully 
    }
  }

  const adminLogin = async (e) =>{
    const mid = "auth/admin/login" ;
    const email = '' ;
    const credentials = {
      email: username,
      password,
    }
    const response = await postAPIcalls(mid, email, credentials);
    if (response.status === 200) {
      localStorage.setItem("adminCred", JSON.stringify(response.data)) ;
      navigate('/admin-dashboard') ;
    } else {
      //not login successfully
    }

  }

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add authentication logic here (not implemented in this example)
    const hostel = username.substring(0,5) ;
    if(hostel.toLowerCase() === 'btech'){
      userLogin() ;
    }
    else{
      adminLogin() ;
    }
    // console.log(response);
    // console.log("Logging in with:", { username, password });
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <FiUser className="text-gray-500 mr-2" />
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="username"
          >
            Username
          </label>
        </div>
        <input
          type="email"
          id="username"
          className="border rounded w-full py-2 px-3"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <FiLock className="text-gray-500 mr-2" />
          <label
            className="block text-gray-700 text-sm font-bold"
            htmlFor="password"
          >
            Password
          </label>
        </div>
        <input
          type="password"
          id="password"
          className="border rounded w-full py-2 px-3"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 focus:outline-none focus:shadow-outline-indigo"
      >
        Login
      </button>
      <p className="mt-4 text-sm">
        Don't have an account?{" "}
        <span
          className="text-indigo-600 cursor-pointer"
          onClick={toggleRegistration}
        >
          Register here
        </span>
      </p>
    </form>
  );
};

export default Login;
