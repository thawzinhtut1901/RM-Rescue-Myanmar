import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { supabase } from '../config/supabase'

export default function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const { data, error } = await supabase
          .from('news')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setNews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) return <div className="container mx-auto px-4 py-8 text-center">Loading...</div>;
  if (error) return <div className="container mx-auto px-4 py-8 text-center text-red-600">Error: {error}</div>;
  if (!news) return <div className="container mx-auto px-4 py-8 text-center">News not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <article className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex items-center mb-4">
            <button
                onClick={() => window.history.back()}
                className="flex items-center text-gray-600 hover:text-gray-800"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
                </svg>
                <span className="ml-2">Back</span>
            </button>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {news.title}
        </h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <time dateTime={news.created_at}>
            {new Date(news.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        <div className="max-w-none">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {news.description}
          </p>
        </div>
        {
            news.url && (
                <div className='mt-5 text-blue-600 underline'>
                    <a href={news.url}>Original Post</a>
                </div>
            )
        }
      </article>
    </div>
  );
}
