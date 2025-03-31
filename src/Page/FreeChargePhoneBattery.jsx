import React from 'react'
import phone_battery from "../data/phone-battery.json"

const FreeChargePhoneBattery = () => {
  const regions = phone_battery.free_phone_battery;
  
  return (
    <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 mx-auto my-4 sm:my-6 px-2 sm:px-4 max-w-screen-lg container">
      {regions.map((region, index) => (
        <div
          key={index}
          className="bg-white shadow-lg hover:shadow-xl p-3 sm:p-4 border border-gray-200 rounded-lg transition-shadow duration-200"
        >
          <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
            <h2 className="font-semibold text-base sm:text-lg">{region.region}</h2>
            <span className="bg-red-200 px-2 sm:px-3 py-1 rounded-full text-red-600 text-xs sm:text-sm whitespace-nowrap">
              {region.places.length} places
            </span>
          </div>
          <div className="gap-3 sm:gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {region.places.map((place, i) => (
              <div key={i} className="hover:bg-gray-50 p-2 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800 text-sm sm:text-base">{place.name}</p>
                <p className="mt-1 text-gray-600 text-sm">{place.address}</p>
                <div className="flex gap-2 mt-2">
                  <a
                    href={place.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    📍 Map
                  </a>
                  <a
                    href={place.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    📱 Facebook
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default FreeChargePhoneBattery