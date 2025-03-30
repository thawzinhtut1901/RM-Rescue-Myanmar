import React from "react";
import homeImage from "../assets/images/home.png";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-10 rounded-lg max-w-5xl w-full">
        <img
          src={homeImage}
          alt="Emergency Kit"
          className="w-full md:w-1/2 h-auto object-contain mb-4 md:mb-0 md:mr-6"
        />
        <div>
          <h2 className="text-red-600 font-bold text-xl md:text-2xl">
            Emergency Earthquake Response – Connect, Respond, Save Lives
          </h2>
          <p className="text-gray-700 mt-2 md:mt-4 text-base md:text-lg">
            Instantly connect with volunteer rescue teams and emergency services
            during earthquakes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
