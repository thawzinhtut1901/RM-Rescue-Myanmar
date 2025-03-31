import React from 'react'
import { useNavigate } from 'react-router'

const Navigation = () => {
    const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center bg-red-600 w-full h-[60px] text-white'>
        <h1>RM - Rescue Myanmar</h1>

        <div className='flex gap-x-10 mx-4 cursor-pointer'>
            <h1 onClick={() => navigate("/home")}>Home</h1>
            <h1 onClick={() => navigate("/emergency-contacts")}>Emergency Contacts</h1>
            <h1 onClick={() => navigate("/free-restaurant")}>Free Restaurant</h1>
            <h1 onClick={() => navigate("/free-charge-phone-battery")}>Free Charge Phone Battery</h1>
        </div>
    </div>
  )
}

export default Navigation