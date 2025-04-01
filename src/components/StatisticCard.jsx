import React from 'react'

export default function StatisticCard({number, label}) {
  return (
    <div className="flex flex-col justify-center items-center bg-white shadow hover:shadow-lg p-4 sm:p-5 md:p-6 rounded-lg text-center transition-shadow duration-200">
      <h2 className="mb-2 sm:mb-3 font-bold text-red-600 text-2xl md:text-3xl lg:text-4xl">{number}</h2>
      <p className="font-medium text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl">{label}</p>
    </div>
  )
}
