import React from 'react'
import { Link } from 'react-router-dom'

const OrderList = ({ Order }) => {
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
                                Consignee
                            </th>
                            <th className=" py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Address
                            </th>
                            <th className=" py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Phone
                            </th>
                            <th className=" py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Subtotal
                            </th>
                            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-gray-100 border-b-2 border-blue-600">
                        {Order.map((order, index) => (
                            <tr key={index} >
                                <td className='p-6 text-gray-900 text-sm font-medium'>{index}</td>
                                <td className='py-6 text-gray-900 text-sm font-medium capitalize'>
                                    {order.consignee}
                                </td>
                                <td className='py-6 text-gray-900 text-sm font-medium capitalize'>
                                    {order.address}
                                </td>
                                <td className='py-6 text-gray-900 text-sm font-medium capitalize'>
                                    {order.phone}
                                </td>
                                <td className='py-6 text-gray-900 text-sm font-medium capitalize'>
                                    $ {order.subtotal}
                                </td>
                                <td className='p-6 text-gray-900 text-sm font-medium capitalize'>
                                    <button className='bg-purple-400 p-2 focus:outline-none text-white font-semibold rounded tracking-wider'>
                                        <Link to={`/admin/orderdetail/${order._id}`}>Detail</Link>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default OrderList
