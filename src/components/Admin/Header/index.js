import React from 'react'
import { BsSearch } from 'react-icons/all'
const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
            <div className="flex items-center">

                <div className="relative mx-4 lg:mx-0">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pb-2">
                        <BsSearch />
                    </span>

                    <input
                        className="form-input w-32 sm:w-64 pb-2 focus:outline-none pl-10 pr-4 border-b-2 border-gray-900"
                        type="text" placeholder="Search" />
                </div>
            </div>


            <div className="relative">
                <button className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                    <img className="h-full w-full object-cover" src="" alt="Your avatar" />
                </button>

                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md  shadow-xl z-10 hidden">
                    <a href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                    <a href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Products</a>
                    <a href="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
                </div>
            </div>

        </header>
    )
}

export default Header
