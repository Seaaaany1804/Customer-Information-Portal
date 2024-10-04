'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import axios from "axios";

const page = () => {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/posts', {title, content})
        router.push('/')
    }


  return (
    <div className="px-48 py-24 bg-[#f8f4f4] h-screen">
      <div className="flex flex-col justify-start bg-white">
        <h1 className="text-3xl font-normal p-4"> Create Customers </h1>

        <form onSubmit={handleSubmit} className="flex gap-2">
        <input
            type="text"
            placeholder="Title"
            value={title}
            className="p-2 px-4 border border-gray-500"
            onChange={(e) => setTitle(e.target.value)}
        />

        <input
            type="text"
            placeholder="Content"
            value={content}
            className="p-2 px-4 border border-gray-500"
            onChange={(e) => setContent(e.target.value)}
        />

        <button className="bg-blue-700 text-white rounded-md p-2 px-4 "> SUBMIT HERE! </button>
      </form>
      </div>

    </div>
  )
}

export default page
