import React from "react";
import { useNavigate } from "react-router";
import logo from "../assets/images/logo.png";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-around items-center w-full h-[60px] text-white">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-10 h-10 rounded-full ml-6" />
      </div>

      <div className="flex gap-x-10 mx-4 cursor-pointer border border-red-500 rounded-full px-4 py-2 text-black">
        <h1 onClick={() => navigate("/home")}>Home</h1>
        <h1 onClick={() => navigate("/emergency-contacts")}>
          Emergency Contacts
        </h1>
        <h1 onClick={() => navigate("/free-restaurant")}>Free Restaurant</h1>
      </div>
    </div>
  );
};

export default Navigation;
