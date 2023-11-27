import React, { useState, useEffect, useRef } from 'react';
import { LuUserCircle2 } from 'react-icons/lu';

const DropDownMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdown);

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <div className="account-sections" ref={dropdownRef}>
      <LuUserCircle2 className="text-2xl" onClick={toggleDropdown} />

      <div className={`dropdown-menu absolute bg-white border rounded shadow-lg ${isDropdownOpen ? 'show' : ''}`}>
        <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">
          Profile
        </a>
        <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">
          Settings
        </a>
        <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" href="#">
          Logout
        </a>
      </div>
    </div>
  );
};

export default DropDownMenu;
