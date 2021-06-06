import React from 'react'
import { SiProducthunt, ImAddressBook } from 'react-icons/all'
const Dashboard = ({ Products, Categories }) => {

    return (
        <div>
            <div className="m-4">
                <div className="flex flex-wrap -mx-6">
                    <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                        <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                            <div className="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                                <span className='text-3xl text-white'><SiProducthunt /></span>
                            </div>
                            <div className="mx-5">
                                <h4 className="text-2xl font-semibold text-gray-700">{Products.length}</h4>
                                <div className="text-gray-500">Products</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                        <div className="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                            <div className="p-3 rounded-full bg-yellow-600 bg-opacity-75">
                                <span className='text-3xl text-white'><ImAddressBook /></span>
                            </div>
                            <div className="mx-5">
                                <h4 className="text-2xl font-semibold text-gray-700">{Categories.length}</h4>
                                <div className="text-gray-500">Categories</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8"></div>
        </div>


    )
}

export default Dashboard
