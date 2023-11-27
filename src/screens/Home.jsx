// App.js

import React, { useState } from 'react';
import Login from '../components/Login';
import Register from '../components/Register';

const Home = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const toggleRegistration = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">{isRegistered ? <div>Register</div> :<div>Log In</div>}</h2>
        {isRegistered ? (
          <Register toggleRegistration={toggleRegistration} />
        ) : (
          <Login toggleRegistration={toggleRegistration} />
        )}
      </div>
    </div>
  );
};

export default Home;
