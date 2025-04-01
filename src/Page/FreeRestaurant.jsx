import React, { useState } from 'react'
import restaurants from "../data/restaurants.json"

const FreeRestaurant = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const restaurantData = restaurants.free_restaurants.map(region => ({
    ...region,
    restaurants: region.restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      region.region.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(region => region.restaurants.length > 0);
  return (
    <>
      <h2 className='my-10 font-semibold text-lg md:text-2xl text-center cursor-default'>ငလျင်ဘေးဒုက္ခသည်များ အခမဲ့သုံးဆောင်နိုင်သော စားသောက်ဆိုင်များ</h2>
      <div className="mx-auto mb-6 px-2 sm:px-4 container">
        <input
          type="text"
          placeholder="ဆိုင်အမည်၊ လိပ်စာ (သို့) မြို့နယ်ဖြင့် ရှာဖွေပါ"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        />
      </div>
      <div className="gap-4 sm:gap-6 grid grid-cols-1 lg:grid-cols-1 mx-auto my-4 sm:my-6 px-2 sm:px-4 container">
        {
          restaurantData.map((region, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl p-3 sm:p-4 border border-gray-200 rounded-lg transition-shadow duration-200 cursor-pointer"
            >
              <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
                <h2 className="font-semibold text-base sm:text-lg">{region.region}</h2>
                <span className="bg-red-200 px-2 sm:px-3 py-1 rounded-full text-red-600 text-xs sm:text-sm whitespace-nowrap">
                  {region.restaurants.length} restaurants
                </span>
              </div>
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                {region.restaurants.map((restaurant, i) => (
                  <div key={i} className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-semibold text-gray-600 text-sm sm:text-base">{restaurant.name}</p>
                    {restaurant.phone && (
                      <p className="mt-1 text-red-600 text-sm sm:text-base">📞 {restaurant.phone}</p>
                    )}
                    <p className="mt-1 text-gray-500 text-sm">{restaurant.address}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </>
   
  )
}

export default FreeRestaurant