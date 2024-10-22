"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import logo from "../assets/customer-service.png";
import Image from 'next/image';
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEdit, FaFastBackward, FaFastForward } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { IoPeopleOutline, IoPeopleSharp  } from "react-icons/io5";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [isVisible, setIsVisible] = useState(true);  // Visibility state for the left menu

    const fetchPosts = async () => {
        const response = await axios.get('http://localhost:5000/posts');
        setPosts(response.data);
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleHideDiv = () => {
        setIsVisible(false);  // Hide the menu
    };

    const handleShowDiv = () => {
        setIsVisible(true);  // Show the menu
    };

    return (
        <div className="relative flex divide-x divide-gray-400 h-screen">
            {/* Left Menu */}
            {isVisible && (
                <div className="relative flex flex-col bg-[#F0F2F5] w-[20%] h-full">
                    <div>
                        <button className="gap-2 flex items-center px-10 py-2  mt-4 w-full hover:bg-[#E5E8EB] rounded-full">
                            <IoPeopleSharp  className="text-xl" />
                            <h1 className="tracking-wider font-semibold"> Customers </h1>
                        </button>
                    </div>

                    

                    {/* Button to hide the menu */}
                    <div className="absolute w-[100%] bottom-10 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
                        <div onClick={handleHideDiv}>
                            <button className="bg-[#E5E8EB] font-semibold rounded-3xl px-12 p-2 text-center"> Hide sidebar </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Right Content */}
            <div className={`w-[${isVisible ? '100%' : '100%'}] bg-[#F0F2F5] py-12 px-[5%]`}>
                <div className="flex justify-between">
                    <div>
                        <h1 className="text-4xl font-bold"> Customers </h1>
                    </div>

                    <Link
                        href="/posts/create"
                        className="text-md bg-[#E5E8EB] py-2 px-10 rounded-full font-bold"> New Customer
                    </Link>
                </div>

                <div>
                    <input type="search" id="gsearch" name="gsearch" className="w-full my-8 bg-[#E5E8EB] rounded-full px-5 py-3" placeholder="Search"/>
                </div>

                {/* Customers Dashboard */}
                <div>
                    {/* Table */}
                    <div>
                        <table className="divide-y divide-gray-200 border w-full bg-white">
                            <thead>
                                <tr className="text-xl">
                                    <th className="text-start font-semibold py-4 px-4"> Name </th>
                                    <th className="text-start font-semibold py-4 px-4"> Email </th>
                                    <th className="text-start font-semibold py-4 px-4"> Phone Number </th>
                                    <th className="text-end font-semibold py-4 px-4"> Action </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-300">
                                {
                                    posts.map((post) => (
                                        <tr key={post.id} className="text-md">
                                            <td className="text-start font-semibold py-8 px-4">{post.fName} {post.lName}</td>
                                            <td className="text-start py-8 px-4">{post.email}</td>
                                            <td className="text-start py-8 px-4">{post.phoneNum}</td>
                                            <td className="flex gap-4 items-center h-full justify-end text-end py-3 px-4">
                                                <Link href={`/posts/${post.id}`}> <IoEyeOutline className="text-2xl" /> </Link>
                                                <button> <FaRegEdit className="text-xl" /> </button>
                                                <button> <MdDeleteOutline className="text-2xl" /> </button>
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

            {/* Show Menu Button */}
            {!isVisible && (
                <div className="absolute bottom-4 left-4">
                    <button onClick={handleShowDiv}>
                        <FaFastForward className="text-xl hover:text-2xl" />
                    </button>
                </div>
            )}
        </div>
    );
}
