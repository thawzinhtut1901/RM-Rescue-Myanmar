import React from 'react'
import restaurants from "../data/restaurants.json"

const FreeRestaurant = () => {
  const restaurantData = restaurants.free_restaurants;
  return (
    <>
      <h2 className='my-10 font-semibold text-2xl text-center'>ငလျင်ဘေးဒုက္ခသည်များ အခမဲ့သုံးဆောင်နိုင်သော စားသောက်ဆိုင်များ</h2>
      <div className="gap-4 sm:gap-6 grid grid-cols-1 lg:grid-cols-1 mx-auto my-4 sm:my-6 px-2 sm:px-4 container">
        {
          restaurantData.map((region, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl p-3 sm:p-4 border border-gray-200 rounded-lg transition-shadow duration-200"
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