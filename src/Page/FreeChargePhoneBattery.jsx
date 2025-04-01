import React, { useState } from 'react'
import phone_battery from "../data/phone-battery.json"

const FreeChargePhoneBattery = () => {
  const regions = phone_battery.free_phone_battery;
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredRegions = regions.map(region => ({
    ...region,
    places: region.places.filter(place =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      place.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      region.region.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(region => region.places.length > 0);

  return (
    <>
      <h2 className='my-10 font-semibold text-lg md:text-2xl text-center cursor-default'>အရေးပေါ်ဖုန်းအားသွင်းနိုင်မည့် နေရာများ</h2>
      <div className="mx-auto mb-6 px-2 sm:px-4 container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ဒေသ၊ နေရာ (သို့) လိပ်စာဖြင့် ရှာဖွေပါ..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>
      <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 mx-auto my-4 sm:my-6 px-2 sm:px-4 container">
        {filteredRegions.map((region, index) => (
          <div
            key={index}
            className="bg-white shadow-lg hover:shadow-xl p-3 sm:p-4 border border-gray-200 rounded-lg transition-shadow duration-200 cursor-pointer"
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
    </>
  )
}

export default FreeChargePhoneBattery