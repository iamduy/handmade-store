import React from 'react'
import { isAuthenticated } from '../../auth'

const user = () => {
    const { user } = isAuthenticated();

    return (
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-6 py-8">
                <div className="md:flex no-wrap md:-mx-2 ">
                    {/* Left Side */}
                    <div className="w-full md:w-3/12 md:mx-2">
                        <div className="bg-white p-3 border-b-4 border-indigo-600">
                            <div className="image overflow-hidden">
                                <img className="h-auto w-full mx-auto" src={user.avatar} />
                            </div>
                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1 text-center mb-3">
                                {user.username}
                            </h1>
                            <span className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="mx-4 font-medium">{user.email}</span>
                            </span>
                        </div>
                        {/* End of user card */}
                        <div className="my-4" />
                        {/* Friends card */}
                    </div>
                    {/* Right Side */}
                    <div className="w-full md:w-9/12 mx-2 h-64">
                        {/* user tab */}
                        {/* About Section */}
                        <div className="bg-white p-3 shadow-sm rounded-sm">
                            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                <span clas="text-green-500">
                                    <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>
                                <span className="tracking-wide">About</span>
                            </div>
                            <div className="text-gray-700">
                                <div className="grid md:grid-cols-1 text-sm uppercase">
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Name :</div>
                                        <span className="px-4 py-2 text-blue-800">
                                            {user.name}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Email :</div>
                                        <span className="px-4 py-2 text-blue-800">
                                            {user.email}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2">
                                        <div className="px-4 py-2 font-semibold">Username :</div>
                                        <span className="px-4 py-2 text-blue-800">
                                            {user.username}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 ">
                                        <div className="px-4 py-2 font-semibold">Role :</div>
                                        <span className="px-4 py-2 text-blue-800">
                                            {user.role === 1 ? 'Admin' : 'Guest'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End of about section */}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default user
