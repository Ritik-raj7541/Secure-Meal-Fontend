import { useState } from 'react'
import './App.css'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLandingPage from './screens/AdminLandingPage'
import StudentLandingPage from './screens/StudentLandingPage'

function App() {

  return (
    < BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Home></Home>} />
        <Route exact path="/login" element={<Login></Login>} />
        <Route exact path="/register" element={ <Register/>} />
        <Route exact path="/student-landing-page" element={ <StudentLandingPage/>} />
        <Route exact path="/admin-landing-page" element={ <AdminLandingPage/>} />
    
      </Routes>

    </ BrowserRouter >
  )
}

export default App
