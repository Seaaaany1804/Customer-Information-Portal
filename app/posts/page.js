"use client"
import Link from "next/link";
import { useState, useEffect } from "react"
import axios from "axios";
import logo from "../assets/customer-service.png";
import Image from 'next/image';
import { IoPawOutline, IoEyeOutline  } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { MdChevronLeft, MdChevronRight  } from "react-icons/md";


export default function Posts() {
    const [posts, setPosts] = useState([])
    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:5000/posts')
        setPosts(response.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className="flex divide-x divide-gray-400 h-screen">
            <div className="flex flex-col w-[15%] h-full">
                <div className="flex px-4 py-8"> 
                    <Image src={logo} alt="LOGO" />
                    <h1 className="text-blue-700 font-bold text-xl tracking-wide"> Customer Information Portal</h1>
                </div>

                <div>
                    <h1 className="text-md px-4 text-gray-500"> Main Menu </h1>
                </div>

                <div>
                <button className="gap-2 flex px-6 py-2 w-full hover:bg-blue-200">
                    <IoPawOutline className="text-xl"/>
                    <h1 className="tracking-wider"> Customers </h1>
                </button>
                </div>
            </div>

            <div className="w-[85%] bg-[#f8f4f4] py-12 px-[5%]">
                <div>
                    <h1 className="text-4xl font-normal"> Customers </h1>
                </div>
                
                {/* Customers Dashboard */}
                <div className="mt-8 py-4 bg-white p-4">
                    {/* Table Buttons */}
                    <div className="flex gap-4">
                        {/* Another Customer */}
                        <Link 
                            href="/posts/create" 
                            className="bg-blue-700 p-2 px-4 text-white rounded-md"> Create Customer 
                        </Link>

                        {/* Filter */}
                        <input 
                            type="text"
                            placeholder="Search..."
                            className="border border-gray-400 p-2 px-4 rounded-md">
                            
                        </input>
                    </div>

                    {/* Table */}
                    <div className="mt-8">
                        <table className="divide-y divide-gray-500 w-full bg-white">
                            <thead>
                                <tr className="text-xl">
                                    <th className="text-start"> ID </th>
                                    <th className="text-start"> Title </th>
                                    <th className="text-start"> Content </th>
                                    <th className="text-end"> Action </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-300">
                                {
                                    posts.map((post) => (
                                        <tr key={post.id} className="text-md">
                                            <td className="text-start py-3">{post.id}</td>
                                            <td className="text-start py-3">{post.title}</td>
                                            <td className="text-start py-3">{post.content}</td>
                                            <td className="flex gap-4 justify-end text-end py-3">
                                                <button> <IoEyeOutline className="text-xl hover:text-2xl" /> </button>
                                                <button> <FaRegEdit className="text-lg hover:text-xl"/> </button>
                                                <button> <MdDeleteOutline className="text-xl hover:text-2xl"/> </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    
                    {/* Pagination */}
                    <div className="flex gap-2 justify-center mt-4">
                        <MdChevronLeft className="text-2xl" />
                        <h1 className="text-gray-500"> 1 out of 1</h1>
                        <MdChevronRight className="text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}