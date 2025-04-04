import React, { useEffect, useState } from 'react'
import { supabase } from '../config/supabase'
import { useGetNews } from '../hooks';

export default function News() {
  const {data: newsData} = useGetNews();

  console.log(newsData)
  // const [newsData, setNewsData] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       console.log('Fetching news data...');
  //       const { data, error } = await supabase
  //         .from('news')
  //         .select('*')
  //         .order('created_at', { ascending: false });

  //       console.log('Supabase response:', { data, error });

  //       if (error) {
  //         console.error('Supabase error:', error);
  //         throw error;
  //       }

  //       if (!data || data.length === 0) {
  //         console.log('No news data found');
  //         setError('No news articles available');
  //       } else {
  //         console.log('News data fetched successfully:', data);
  //         setNewsData(data);
  //       }
  //     } catch (err) {
  //       console.error('Error fetching news:', err);
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNews();
  // }, []);


  // if (loading) return <div className="mx-auto px-4 py-8 text-center container">Loading...</div>;
  // if (error) return <div className="mx-auto px-4 py-8 text-red-600 text-center container">Error: {error}</div>;

  return (
    <div className="mx-auto px-4 py-8 container">
      <h1 className="mb-8 font-bold text-gray-800 text-3xl">Latest News</h1>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {newsData?.map((news) => (
          <div key={news.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="mb-2 font-semibold text-gray-800 text-xl">{news.title}</h2>
              <p className="mb-4 text-gray-600">{news.description}</p>
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
