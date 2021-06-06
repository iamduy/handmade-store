import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, BiUserCircle, BsSearch, HiOutlineLocationMarker, RiAdminLine, IoLogOutOutline } from "react-icons/all";
import { Link, useHistory, useLocation } from "react-router-dom";
import { OnSignOut, isAuthenticated } from '../../../auth'

const Header = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(true);
  useEffect(() => {
    isAuthenticated() && setIsLogged(true);
  }, [pathname, isLogged])

  const User = isAuthenticated().user;
  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 py-3">

        <div className="flex items-center justify-between">

          <div className="text-gray-600 flex">
            <HiOutlineLocationMarker />
            <span className="mx-1 text-sm">My Dinh</span>
          </div>

          <div className="text-3xl hind tracking-widest text-blue-400">W-1914</div>


          <div className="flex text-2xl">
            <span className='pr-2 h-8 w-8 mt-2'><AiOutlineShoppingCart /></span>
           

            {!isLogged && (

              <Link to='/signin'>
                <span>Sign in</span>
              </Link>

            )}

            {
              isLogged && (
                <div className="dropdown z-50">
                  <button className='focus:outline-none'>
                    <img src={User.avatar} alt="" className='inline-block h-8 w-8 rounded-full ring-2 ring-white' />
                  </button>
                  <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div className="uppercase absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">

                      <Link to='/admin/dashboard'>
                        <div className="px-4 py-3 flex text-base">
                          <RiAdminLine />
                          <span className='ml-2 hover:text-blue-500 transition duration-300 font-medium'> Admin
                        </span>
                        </div>
                      </Link>

                      <div className="py-1">
                        <button onClick={() => OnSignOut(() => {
                          history.push('/')
                          setIsLogged(false);
                        })} className="flex px-4 py-3 text-base uppercase">
                          <IoLogOutOutline />
                          <span className='ml-2 hover:text-blue-500 transition duration-300 font-medium'> Sign out
                        </span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              )
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
