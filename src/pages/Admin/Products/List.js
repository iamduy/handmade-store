import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { IoIosAddCircleOutline, AiTwotoneDelete, FaRegEdit, BsSearch } from 'react-icons/all'
import { API } from '../../../config'
const List = ({ Products, onRemoveProduct, searchTerm, searchKeyWords }) => {
    const Ref = useRef('');
    const getSearchTerm = () => {
        searchKeyWords(Ref.current.value);
    }
    return (
        <div className='m-4'>
            <div className='flex justify-between'>
                {/* search product */}
                <div className='relative mx-4 lg:mx-0'>
                    <span className='absolute inset-y-0 left-0 pl-3 flex items-center pb-5'>
                        <BsSearch />
                    </span>
                    <input
                        ref={Ref}
                        value={searchTerm}
                        onChange={getSearchTerm}
                        type='text'
                        className='form-input w-32 bg-gray-200 sm:w-64 pb-2 focus:outline-none pl-10 pr-4 border-b-2 border-gray-900'
                        placeholder='Search' />
                </div>

                <Link to='/admin/product/add'>
                    <button className='mb-2 py-2 px-4 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none uppercase'>
                        <span className='text-md flex '>add product  <IoIosAddCircleOutline /></span>
                    </button>
                </Link>
            </div>

            <table className='min-w-full'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                            #
                    </th>
                        <th className='py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                            Name
                    </th>
                        <th className=' py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                            Photos
                    </th>
                        <th className='py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                            Status
                    </th>
                        <th className=' py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                            Price
                    </th>
                        <th className='px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider'>
                            Actions
                    </th>
                    </tr>
                </thead>

                <tbody className='bg-gray-100 border-b-2 border-blue-600'>
                    {Products.map((product, index) => (

                        <tr key={index}>

                            <td className='px-6 text-gray-900 text-sm font-medium'>{index}</td>
                            <td className='text-gray-900 text-sm font-medium capitalize'>{product.name}</td>
                            <td>
                                <img className='w-20 my-2' src={`${API}/product/photo/${product._id}`} alt='images' />
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
export default List
