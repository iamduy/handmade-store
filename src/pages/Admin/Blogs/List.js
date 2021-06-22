import React from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin5Line, FaRegEdit } from 'react-icons/all'

const BlogList = ({ Blog }) => {
    return (
        <>
         <div className='m-10'>
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
                        <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody className="bg-gray-100 border-b-2 border-blue-600">
                    {Blog.map((blog, index) => (

                        <tr key={index}>

                            <td className='px-6 text-gray-900 text-sm font-medium'>{index}</td>
                            <td className='text-gray-900 text-sm font-medium capitalize'>{blog.title}</td>
                            <td>
                                <img className="w-20 my-2" src={blog.photo} alt='images' />
                            </td>

                            <td className='flex m-6'>

                                <button className='text-xl mr-4' >
                                    <Link to={`/admin/blogs/edit/${blog._id}`}>
                                        <FaRegEdit />
                                    </Link>
                                </button>

                                <button className='text-xl'><RiDeleteBin5Line /></button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
         </div>
        </>
    )
}

export default BlogList
