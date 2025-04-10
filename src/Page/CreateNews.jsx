import React, { useState } from 'react'
import { supabase } from '../config/supabase'
import { useNavigate } from 'react-router'

export default function CreateNews() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase
        .from('news')
        .insert([formData])

      if (error) throw error
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
      navigate('/news')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h2 className='mb-6 font-semibold text-lg md:text-2xl text-center'>သတင်းအသစ်ထည့်သွင်းပါ</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            ခေါင်းစဉ်
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder='သတင်းခေါင်းစဉ်'
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            အချက်အလက်
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            placeholder='သတင်းအချက်အလက်အပြည့်အစုံ'
            rows="4"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            မူရင်းလင့်
          </label>
          <input
            type="url"
            id="url"
            name="url"
            value={formData.url}
            placeholder='မူရင်းလင့်'
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
        <div className="flex gap-4 mt-4">
            <button
                type="button"
                onClick={() => navigate('/news')}
                className="flex-1 py-2 px-4 rounded-lg text-gray-700 font-medium border border-gray-300 hover:bg-gray-50"
            >
                ပယ်ဖျက်မည်
            </button>
            <button
                type="submit"
                disabled={loading}
                className={`flex-1 py-2 px-4 rounded-lg text-white font-medium ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700'}`}
            >
                {loading ? 'ထည့်သွင်းနေသည်...' : 'ထည့်သွင်းမည်'}
            </button>
        </div>
      </form>
    </div>
  )
}
