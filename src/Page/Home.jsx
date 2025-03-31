import React from "react";
import homeImage from "../assets/images/home.png";

const Home = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center p-4 md:p-8">
      <div className="flex md:flex-row flex-col items-center bg-white p-6 md:p-10 rounded-lg w-full max-w-5xl">
        <img
          src={homeImage}
          alt="Emergency Kit"
          className="md:mr-6 mb-4 md:mb-0 w-full md:w-1/2 h-auto object-contain"
        />
        <div>
          <h2 className="font-bold text-red-600 text-xl md:text-2xl">
            Emergency Natural Disasters Response – Connect, Respond, Save Lives
          </h2>
          <p className="mt-2 md:mt-4 text-gray-700 text-base md:text-lg">
            Instantly connect with volunteer rescue teams and emergency services
            during natural disasters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
