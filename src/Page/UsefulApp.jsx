import React from 'react';
import useful_apps from '../data/useful-apps.json';

export default function UsefulApp() {
  const apps = useful_apps.useful_apps;

  return (
    <div className="mx-auto px-4 py-8 container">
      <h2 className="my-10 font-semibold text-lg md:text-2xl text-center cursor-default">ငလျင်အတွက် အသုံးဝင်သော App များ</h2>
      <div className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto my-4 sm:my-6">
        {apps.map((app, index) => (
          <a
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="flex flex-col bg-white shadow-lg hover:shadow-xl p-4 sm:p-6 border border-gray-200 rounded-lg h-full transition-shadow duration-200 hover:cursor-pointer"
          >
            <div className="flex-grow">
              <h3 className="mb-3 font-semibold text-xl">{app.name}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{app.description}</p>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg text-white transition-colors duration-200">
                Download App
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
