import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteCart, downCart, upCart } from '../../../actions/cartAction';
import { RiDeleteBin5Line, BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/all'
const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(data => data.cart.data);
    if (cart !== null) {
        var subtotal = cart.reduce((sum, { sl, price }) => sum + sl * price, 0)
    }

    const handleDelele = (id) => {
        const isConfirm = window.confirm('Do you want delete !');
        if (isConfirm) {
            dispatch(deleteCart(id))
        }
    }

    const handleUpCart = (id) => {
        dispatch(upCart(id));
    }

    const handleDownCart = (id) => {
        dispatch(downCart(id));

    }

    return (

        <>
            {
                cart.length >= 1 ? (
                    <div className='flex w-full px-24 h-auto my-10'>
                        <div className='w-2/3 h-auto flex-col '>
                            <p className='text-left text-lg font-semibold uppercase py-4'>shopping cart</p>

                            <table className='table-fixed border-collapse border border-gray-400 w-full mb-5'  >
                                <thead>
                                    <tr className='uppercase tracking-widest '>
                                        <th className='border border-gray-300 py-4 w-2/3 font-semibold text-sm'>Item</th>
                                        <th className='border border-gray-300 py-4 px-6 w-1/9 font-semibold text-sm'>Qty</th>
                                        <th className='border border-gray-300 py-4 px-2 w-1/9 font-semibold text-sm'>PRICE</th>
                                        <th className='border border-gray-300 py-4 px-2 w-1/9 font-semibold text-sm'>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((product, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className=' p-4 flex border border-gray-300'>
                                                        <div
                                                            className='bg-cover bg-center w-1/4 h-24 mr-3 '
                                                            style={{ backgroundImage: `url(http://localhost:4000/api/product/photo/${product._id})` }}
                                                        ></div>
                                                        <div className='row w-3/4'>
                                                            <span className='w-full text-md font-semibold text-gray-900'>{product.name}</span>
                                                            <p className='w-full text-md font-bold  text-gray-900 mt-3'>$ {product.price}</p>
                                                        </div>
                                                    </td>
                                                    <td className='border border-gray-300 text-center'>
                                                        <div className='flex flex-col '>
                                                            <div>
                                                                <button
                                                                    onClick={() => handleUpCart(product._id)}
                                                                    className=' focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                                                                    <span className='text-xl '>
                                                                        <BsChevronCompactUp />
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <div>{product.sl}</div>
                                                            <div>
                                                                <button
                                                                    onClick={() => handleDownCart(product._id)}
                                                                    className='focus:outline-none transition duration-500 ease-in-out transform hover:translate-y-1 hover:scale-110'>
                                                                    <span className='text-xl'>
                                                                        <BsChevronCompactDown />
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='border border-gray-300 text-center'>$ {product.price * product.sl}</td>
                                                    <td className='border border-gray-300 text-center'>
                                                        <button className=' focus:outline-none'
                                                            onClick={() => handleDelele(product._id)}
                                                        >
                                                            <span className='text-xl'><RiDeleteBin5Line /></span>
                                                        </button>
                                                    </td>
                                                </tr>

                                            )
                                        }

                                        )
                                    }
                                </tbody>
                            </table>

                            <Link to='/shop' className='flex font-semibold border text-gray-200 bg-gray-900 hover:border-gray-900 py-2 px-6 focus:outline-none  my-6 capitalize transition duration-300 hover:text-gray-900 hover:bg-white w-2/4 justify-center'>CONTINUE SHOPPING</Link>



                        </div>
                        <div className='w-1/3  h-auto tracking-widest px-10'>
                            <p className='text-left text-lg font-semibold uppercase py-4'>summary</p>
                            <table className='table-fixed border-collapse border border-gray-400 w-full text-left'>
                                <thead>
                                    <tr className=' tracking-widest text-gray-500 '>
                                        <th className='border border-gray-300 p-4 w-2/3 font-semibold text-sm '>Subtotal</th>
                                        <th className='border border-gray-300 p-4 w-1/3 font-semibold text-sm'>$<b>{subtotal}</b></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='border border-gray-300 font-semibold text-sm p-4'>Shipping</td>
                                        <td className='border border-gray-300 p-4 w-1/3 font-semibold text-sm text-gray-500'>$0</td>
                                    </tr>
                                    <tr className=' tracking-widest text-gray-500 '>
                                        <td className='border border-gray-300 font-semibold text-sm p-4'>Order Total</td>
                                        <td className='border border-gray-300 p-4 w-1/3 font-bold text-sm text-gray-900'>$<b>{subtotal}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                            <Link to='/checkout' className='flex font-semibold border text-gray-200 bg-gray-900 hover:border-gray-900 py-2 px-6 focus:outline-none  my-6 capitalize transition duration-300 hover:text-gray-900 hover:bg-white w-full justify-center'>PROCEED TO CHECKOUT</Link>
                        </div>
                    </div>
                ) : <div className='py-10'>
                    <span className='flex justify-center text-2xl tracking-wider'>Bạn chưa có gì trong giỏ ,<i className='text-red-400 font-bold px-1'>Shopping</i>ngay nào !</span>
                    <div className='flex justify-center'>
                        <Link to='/shop'>
                            <span className='flex font-semibold border hover:text-gray-200 hover:bg-gray-900 border-gray-900 py-2 px-6 focus:outline-none  my-6 capitalize transition duration-300 text-gray-900 bg-white'>
                                Shop Now
                            </span>
                        </Link>
                    </div>
                </div>
            }


            {/* <div className="flex justify-center my-6">
                <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                    <div className="flex-1">
                        <table className="w-full text-sm lg:text-base" cellSpacing={0}>
                            <thead>
                                <tr class="h-12 uppercase">
                                    <th className='hidden md:table-cell' />
                                    <th className='text-left'>Product</th>
                                    <th class="lg:text-right text-left pl-5 lg:pl-0" >
                                        <div>
                                            <span className="lg:hidden" title="Quantity">Qtd</span>
                                            <span className="hidden lg:inline">Quantity</span>
                                        </div>
                                    </th>
                                    <th className="hidden text-right md:table-cell">Unit Price</th>
                                    <th className="text-right">Total Price</th>
                                </tr>
                            </thead>

                            <tbody>

                            </tbody>


                        </table>

                    </div>
                </div>
            </div> */}


        </>
    )
}

export default Cart
