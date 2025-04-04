import React, { useState } from 'react'
import emergency_contacts from "../data/contact.json"

const EmergencyContacts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const contacts = emergency_contacts.emergency_contacts;

  const filteredContacts = contacts.filter(region => {
    const searchLower = searchQuery.toLowerCase();
    const regionMatch = region.region.toLowerCase().includes(searchLower);
    const contactMatch = region.contacts.some(contact => 
      contact.name.toLowerCase().includes(searchLower) ||
      contact.phone.toLowerCase().includes(searchLower)
    );
    return regionMatch || contactMatch;
  });

  return (
    <>
      <h2 className='my-10 font-semibold text-lg md:text-2xl text-center cursor-default'>အရေးပေါ် ကူညီကယ်ဆယ်ရေး နံပါတ်များ</h2>
      <div className="container mx-auto px-2 sm:px-4">
        <div className="mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ဒေသ၊ အမည် သို့မဟုတ် ဖုန်းနံပါတ်ဖြင့် ရှာဖွေပါ..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        
        <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto my-4 sm:my-6">
          {filteredContacts.map((region, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-xl p-3 sm:p-4 border border-gray-200 rounded-lg transition-shadow duration-200 cursor-pointer"
            >
              <div className="flex flex-wrap justify-between items-center gap-2">
                <h2 className="font-semibold text-base sm:text-lg">{region.region}</h2>
                <span className="bg-red-200 px-2 sm:px-3 py-1 rounded-full text-red-600 text-xs sm:text-sm whitespace-nowrap">
                  {region.contacts.length} contacts
                </span>
              </div>
              {region.contacts.map((contact, i) => (
                <div key={i} className="mt-2 sm:mt-3">
                  <p className="text-gray-600 text-sm sm:text-base">{contact.name}</p>
                  <p className="mt-1 font-semibold text-red-600 text-sm sm:text-base">📞 {contact.phone}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default EmergencyContacts