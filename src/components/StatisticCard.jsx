import React from 'react'

export default function StatisticCard({number, label}) {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">{number}</h2>
    <p className="text-gray-700 text-base md:text-lg font-medium mb-1">{label}</p>
    </div>
  )
}
