import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router'
import { Logo } from '../assets';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex justify-between items-center bg-red-600 px-4 w-full h-[60px] text-white'>
        <div onClick={() => navigate("/")} className='flex items-center gap-x-2 cursor-pointer'>
         <img src={Logo} alt="" className='bg-white p-1 rounded-full w-[30px] md:w-[35px] h-[30px] md:h-[35px]'/>
          <h1 className='text-sm md:text-base lg:text-lg'>RM - Rescue Myanmar</h1>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-2xl'>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop menu */}
        <div className='hidden md:flex gap-x-4 lg:gap-x-8 text-sm lg:text-base cursor-pointer'>
            <h1 onClick={() => navigate("/")} className={`hover:text-red-200 hover:underline ${location.pathname === "/home" ? "text-red-200 underline" : ""}`}>Home</h1>
            <h1 onClick={() => navigate("/emergency-contacts")} className={`hover:text-red-200 hover:underline ${location.pathname === "/emergency-contacts" ? "text-red-200 underline" : ""}`}>Recuse Teams</h1>
            <h1 onClick={() => navigate("/free-restaurant")} className={`hover:text-red-200 hover:underline ${location.pathname === "/free-restaurant" ? "text-red-200 underline" : ""}`}>Food Services</h1>
            <h1 onClick={() => navigate("/free-charge-phone-battery")}  className={`hover:text-red-200 hover:underline ${location.pathname === "/free-charge-phone-battery" ? "text-red-200 underline" : ""}`}>Charging Stations</h1>
            <h1 onClick={() => navigate("/donation")}  className={`hover:text-red-200 hover:underline ${location.pathname === "/donation" ? "text-red-200 underline" : ""}`}>Donation Organziations</h1>
            <h1 onClick={() => navigate("/deadbody-bag")}  className={`hover:text-red-200 hover:underline ${location.pathname === "/deadbody-bag" ? "text-red-200 underline" : ""}`}>Deadbody Bag</h1>
            <h1 onClick={() => navigate("/useful-apps")}  className={`hover:text-red-200 hover:underline ${location.pathname === "/useful-apps" ? "text-red-200 underline" : ""}`}>Useful App</h1>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'flex' : 'hidden'} md:hidden absolute top-[60px] left-0 right-0 flex-col bg-red-600 w-full p-4 gap-y-4 shadow-lg cursor-pointer`}>
            <h1 onClick={() => {navigate("/"); setIsOpen(false)}} className={`hover:text-red-200 hover:underline ${location.pathname === "/home" ? "text-red-200 underline" : ""}`}>Home</h1>
            <h1 onClick={() => {navigate("/emergency-contacts"); setIsOpen(false)}} className={`hover:text-red-200 hover:underline ${location.pathname === "/emergency-contacts" ? "text-red-200 underline" : ""}`}>Emergency Contacts</h1>
            <h1 onClick={() => {navigate("/free-restaurant"); setIsOpen(false)}} className={`hover:text-red-200 hover:underline ${location.pathname === "/free-restaurant" ? "text-red-200 underline" : ""}`}>Free Restaurant</h1>
            <h1 onClick={() => {navigate("/free-charge-phone-battery"); setIsOpen(false)}}  className={`hover:text-red-200 hover:underline ${location.pathname === "/free-charge-phone-battery" ? "text-red-200 underline" : ""}`}>Free Charge Phone Battery</h1>
            <h1 onClick={() => {navigate("/donation"); setIsOpen(false)}}  className={`hover:text-red-200 hover:underline ${location.pathname === "/donation" ? "text-red-200 underline" : ""}`}>Donation Organziations</h1>
            <h1 onClick={() => {navigate("/deadbody-bag"); setIsOpen(false)}}  className={`hover:text-red-200 hover:underline ${location.pathname === "/deadbody-bag" ? "text-red-200 underline" : ""}`}>Deadbody Bag</h1>
            <h1 onClick={() => {navigate("/useful-apps"); setIsOpen(false)}}  className={`hover:text-red-200 hover:underline ${location.pathname === "/useful-apps" ? "text-red-200 underline" : ""}`}>Useful App</h1>
        </div>
    </div>
  )
}

export default Navigation