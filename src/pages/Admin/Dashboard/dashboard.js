import React from 'react'
import { Link } from 'react-router-dom'
import { SiProducthunt, ImAddressBook, AiTwotoneDelete, FaRegEdit } from 'react-icons/all'
import { API } from '../../../config'
const Dashboard = ({ Products, Categories, onRemoveProduct }) => {

    return (
        <div className='m-4'>

            <div className="flex flex-wrap -mx-6">
                <div className="w-full px-6 sm:w-1/2 xl:w-1/2">
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
                <div className="w-full mt-6 px-6 sm:w-1/2 xl:w-1/2 sm:mt-0">
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

            <div className="mt-8"></div>

            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            #
                    </th>
                        <th className="py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Name
                    </th>
                        <th className=" py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Photos
                    </th>
                        <th className="py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Status
                    </th>
                        <th className=" py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Price
                    </th>
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                    </th>
                    </tr>
                </thead>

                <tbody className="bg-gray-100 border-b-2 border-blue-600">
                    {Products.map((product, index) => (

                        <tr key={index}>

                            <td className='px-6 text-gray-900 text-sm font-medium'>{index}</td>
                            <td className='text-gray-900 text-sm font-medium capitalize'>{product.name}</td>
                            <td>
                                <img className="w-20 my-2" src={`${API}/product/photo/${product._id}`} alt='images' />
                            </td>
                            <td>
                                {product.status ?
                                    <span className='bg-green-400 p-1 text-xs rounded text-white'>
                                       In Stock
                                </span> :
                                    <span className='bg-red-400 p-1 text-xs rounded text-white'>
                                     Out Stock
                                </span>
                                }
                            </td>
                            <td className='text-gray-900 text-sm font-medium'>$ {product.price}</td>
                            <td className='flex justify-around p-6'>
                                <button onClick={() => onRemoveProduct(product._id)}><AiTwotoneDelete /></button>
                                <Link to={`/admin/product/edit/${product._id}`}>
                                    <button><FaRegEdit /></button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>


    )
}

export default Dashboard
