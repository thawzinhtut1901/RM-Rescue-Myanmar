import React from 'react'
import donation_org from "../data/donation-organizations.json"

const Donation = () => {
    const donation = donation_org.donation_organizations;
    return (
      <>
        <h2 className='my-10 font-semibold text-2xl text-center cursor-default'>ငလျင်ဘေးအတွက်ယုံကြည်စိတ်ချစွာလှူနိုင်သောအဖွဲ့အစည်းများ</h2>
        <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto my-4 sm:my-6 px-2 sm:px-4 container">
          {donation.map((donate, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl p-3 sm:p-4 border border-gray-200 rounded-lg transition-shadow duration-200 cursor-pointer"
            >
              <div className="hover:bg-gray-50 p-2 border border-gray-100 rounded-lg">
                <p className="font-medium text-gray-800 text-sm sm:text-base">{donate.name}</p>
                <div className="flex gap-2 mt-2">
                  <a
                    href={donate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    📱 Facebook
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )
}

export default Donation