import React from 'react'
import { Link, useHistory } from "react-router-dom";
import { IoLogOutOutline, CgProfile } from 'react-icons/all'
const Header = ({ Logout, userProfile }) => {
    const history = useHistory();
    return (
        <header className="flex justify-end items-center py-4 px-6 bg-white border-b-4 border-indigo-600">

            <div className="relative">
                {
                    userProfile ? (
                        <div className="dropdown z-50">
                            <button className='focus:outline-none'>
                                <img src={userProfile.avatar} alt="" className='inline-block h-8 w-8 rounded-full ring-2 ring-white' />
                            </button>
                            <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                <div className="uppercase absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">

                                    <div className="py-1">
                                        <Link to='/profile'>
                                            <div className="px-4 py-3 flex text-base">
                                                <CgProfile />
                                                <span className='ml-2 hover:text-blue-500 transition duration-300 font-medium'> Profile
                                                </span>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="py-1">
                                        <button onClick={() => Logout(() => {
                                            history.push('/');
                                        })} className="focus:outline-none flex px-4 py-3 text-base uppercase">
                                            <IoLogOutOutline />
                                            <span className='ml-2 hover:text-blue-500 transition duration-300 font-medium'> Sign out
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ''
                }
            </div>

        </header>
    )
}

export default Header
