import React from "react";
import { useNavigate } from "react-router";

const navigate = useNavigate;
const Footer = () => {
  return (
    <div className="bg-blue-950">
      <div class="text-center">
        <p
          onClick={() => {
            navigate("/");
          }}
          class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900"
        >
          Emergency Contact List
        </p>

        <span class="block text-sm text-center text-gray-500">
          © 2025 Save Myanmar Earth Quake. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
