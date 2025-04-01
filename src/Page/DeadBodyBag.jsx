import React from 'react'
import dead_body_bags from "../data/dead-body-bags.json"

const DeadBodyBag = () => {
  const bags = dead_body_bags.dead_body_bags;
  return (
    <>
      <h2 className='my-10 font-semibold text-lg md:text-2xl text-center cursor-default'>အလောင်းအိတ်များ ရရှိနိုင်သော နေရာများ</h2>
      <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto my-4 sm:my-6 px-2 sm:px-4 container">
        {bags.map((bag, index) => (
          <a
            href={bag.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="block bg-white shadow-lg hover:shadow-xl p-3 sm:p-4 border border-gray-200 rounded-lg transition-shadow duration-200 cursor-pointer"
          >
            <div className="hover:bg-gray-50 p-2 border border-gray-100 rounded-lg">
              <p className="font-medium text-gray-800 text-sm sm:text-base">{bag.title}</p>
              <div className="flex gap-2 mt-2">
                <span className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm">
                  📱 Facebook
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}

export default DeadBodyBag