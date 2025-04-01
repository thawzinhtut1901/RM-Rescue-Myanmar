import React from 'react'

export default function News() {
  const newsData = [
    {
      id: 1,
      title: "Emergency Aid Reaches Remote Areas",
      description: "Humanitarian organizations successfully deliver critical supplies to communities in need.",
      date: "2024-01-15",
      image: "https://placehold.co/600x400"
    },
    {
      id: 2,
      title: "Community Support Networks Expand",
      description: "Local volunteers establish new support centers to assist displaced families.",
      date: "2024-01-14",
      image: "https://placehold.co/600x400"
    },
    {
      id: 3,
      title: "Medical Teams Provide Essential Care",
      description: "Mobile medical units reach remote villages, offering vital healthcare services.",
      date: "2024-01-13",
      image: "https://placehold.co/600x400"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Latest News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h2>
              <p className="text-gray-600 mb-4">{news.description}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <span>{news.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
