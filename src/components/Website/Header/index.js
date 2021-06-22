import React, { useEffect, useState } from "react";
import { HiOutlineShoppingBag, BsSearch, HiOutlineLocationMarker, RiAdminLine, IoLogOutOutline, CgProfile } from "react-icons/all";
import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";


const Header = ({ Logout, userProfile }) => {

  const history = useHistory();
  const cart = useSelector(data => data.cart.data);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 py-3">

        <div className="flex items-center justify-between">

          <div className="text-gray-600 flex">
            <HiOutlineLocationMarker />
            <span className="mx-1 text-sm">My Dinh</span>
          </div>

          <div className="text-3xl hind tracking-widest text-blue-400">W-1914</div>


          <div className="flex text-3xl">



            <div className="relative mr-5 mt-2">
              <Link to='/cart'>
                <HiOutlineShoppingBag className="text-3xl font-semibold" />
              </Link>
              <div className={cart.length >= 1 ? 'absolute -top-1 -right-2 bg-red-500 w-5 h-5  flex items-center justify-center  rounded-full' : 'hidden'}>
                <p className='text-white text-xs font-semibold'>{cart.length}</p>
              </div>
            </div>

            {
              userProfile ? (
                <div className="dropdown z-50">
                  <button className='focus:outline-none'>
                    <img src={userProfile.avatar} alt="" className='inline-block h-8 w-8 rounded-full ring-2 ring-white' />
                  </button>
                  <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div className="uppercase absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                      {userProfile.role === 1 ?
                        <Link to='/admin/dashboard'>
                          <div className="px-4 py-3 flex text-base">
                            <RiAdminLine />
                            <span className='ml-2 hover:text-blue-500 transition duration-300 font-medium'> Admin
                            </span>
                          </div>
                        </Link> : ''}

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
              ) :
                <Link to='/signin'>
                  <span className='text-sm font-light hover:text-blue-400'>Sign in</span>
                </Link>
            }
          </div>

        </div>

        <nav className="sm:flex sm:justify-center sm:items-center mt-4">
          <div className="flex flex-col sm:flex-row font-semibold uppercase">

            <div className="mt-3 text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-400 sm:mx-3 sm:mt-0 focus:text-red-600">
              <Link to='/'>Home</Link>
            </div>
            <div className="mt-3 text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-400 sm:mx-3 sm:mt-0 focus:text-red-600">
              <Link to='/shop'>Shop</Link>
            </div>
            <div className="mt-3 text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-400 sm:mx-3 sm:mt-0 focus:text-red-600">
              <Link to='/blog'>Blog</Link>
            </div>
            <div className="mt-3 text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-400 sm:mx-3 sm:mt-0 focus:text-red-600">
              <Link to='/contact'>Contact</Link>
            </div>
            <div className="mt-3 text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-400 sm:mx-3 sm:mt-0 focus:text-red-600">
              <Link to='/about'>About</Link>
            </div>
          </div>
        </nav>

        <div className="relative mt-6 max-w-lg mx-auto">
          <button className="absolute inset-y-0 left-0 pl-3 flex items-center focus:outline-none" type="submit">
            <BsSearch />
          </button>

          <input
            className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline my-3"
            type="text" placeholder="Search" />
        </div>
      </div>

    </header>
  );
};

export default Header;
