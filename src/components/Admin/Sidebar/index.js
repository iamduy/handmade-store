import React from 'react'
import { RiDashboardFill, BsListNested, ImAddressBook } from 'react-icons/all'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className='fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0'>
            <div className='flex items-center justify-center mt-8'>
                <Link to='/'>
                    <img className='w-30'
                        src='https://demo.templatetrip.com/Opencart/OPC01/OPC009/OPC01/image/catalog/logo.png' />
                </Link>
            </div>

            <nav className='mt-10'>

                <Link to='/admin/dashboard'>
                    <div className='flex  text-white m-2'>
                        <span className='mt-1 mx-3'><RiDashboardFill /></span>
                        <span className='font-thin transition duration-300 hover:text-gray-400'>Dashboard</span>
                    </div>
                </Link>

                <Link to='/admin/product/list'>
                    <div className='flex text-white m-2'>
                        <span className='mt-1 mx-3'><BsListNested /></span>
                        <span className='font-thin transition duration-300 hover:text-gray-400'>Products</span>
                    </div>
                </Link>

                <Link to='/admin/category/list'>
                    <div className='flex text-white m-2'>
                        <span className='mt-1 mx-3'><ImAddressBook /></span>
                        <span className='font-thin transition duration-300 hover:text-gray-400'>Category</span>
                    </div>
                </Link>

            </nav>
        </div>
    )
}

export default Sidebar
