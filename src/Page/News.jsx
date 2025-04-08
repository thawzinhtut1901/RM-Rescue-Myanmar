import React, { useEffect, useState } from 'react'
import { supabase } from '../config/supabase'
import { Link } from 'react-router';

export default function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setNewsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
  console.log(newsData);

  if (loading) return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  if (error) return <div className="container mx-auto px-4 py-8 text-center text-red-600">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className='mb-10 font-semibold text-lg md:text-2xl text-center cursor-default'>ငလျင်ဘေးနှင့်ဆိုင်သော နောက်ဆုံးရသတင်းများ</h2>
      <div className="flex justify-end mb-6">
        <Link to="/news/create" className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          သတင်းအသစ်တင်ရန်
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-8">
            သတင်းများမရှိသေးပါ။
          </div>
        ) : (
          newsData.map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h2>
                <p className="text-gray-500 text-sm mb-2">
                  Posted on: {new Date(news.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="text-gray-600 mb-4">
                  {news.description.length > 150 ? `${news.description.substring(0, 150)}...` : news.description}
                </p>
                <Link to={`/news/${news.id}`} className="bg-red-500 hover:bg-red-600 text-white font-semibold text-sm py-2 px-3 rounded-md">
                  ပိုမိုကြည့်ရှုရန်
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
