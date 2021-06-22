import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import orderAPI from '../../../api/orderAPI';
import { API } from '../../../config';

const OrderDetail = ({ listOrderDetail }) => {


    const [order, setOrder] = useState();
    const { id } = useParams();
    useEffect(() => {
        (
            async () => {
                const { data: order } = await orderAPI.get(id);
                setOrder(order._id);
            }
        )()
    }, [])

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
                                Name Product
                            </th>
                            <th className=" py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Photo
                            </th>
                            <th className=" py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Price
                            </th>
                            <th className=" py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Quantity
                            </th>
                        </tr>
                    </thead>

                    <tbody className="bg-gray-100 border-b-2 border-blue-600">
                        {listOrderDetail.filter(prod => prod.id_order === order).map((items, index) => (
                            <tr key={index} >
                                <td className='p-6 text-gray-900 text-sm font-medium'>{index}</td>
                                <td className='py-6 text-gray-900 text-sm font-medium capitalize'>
                                    {items.name}
                                </td>
                                <td className='py-6 text-gray-900 text-sm font-medium capitalize'>
                                    {
                                        <img className="w-20 my-2" src={`${API}/product/photo/${items.id_product}`} alt='images' />
                                    }
                                </td>
                                <td className='py-6 text-gray-900 text-sm font-medium capitalize'>
                                    {items.price}
                                </td>
                                <td className='py-6 text-gray-900 text-sm font-medium capitalize'>
                                    {items.sl}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className='my-4 px-4 py-2 hover:bg-purple-500 border-purple-500 hover:text-purple-200 transition duration-300  text-purple-500 font-bold border'>
                    <Link to={'/admin/order/list'}>
                        BACK
                    </Link>
                </button>
            </div>
        </>
    )
}

export default OrderDetail
