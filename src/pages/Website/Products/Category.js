import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import categoryAPI from '../../../api/categoryAPI'
import { useParams } from 'react-router-dom';
import { API } from '../../../config'
import { IoIosArrowDown } from 'react-icons/all'
import _ from 'lodash'
import { useDispatch } from 'react-redux';
import { addCart } from '../../../actions/cartAction';

const Category = ({ Products, Categories, searchTerm, searchKeyWords }) => {

    const { id } = useParams();
    const [category, setCategory] = useState([]);

    // search product
    const Ref = useRef('');
    const getSearchTerm = () => {
        searchKeyWords(Ref.current.value);
    }


    const [select, setSelect] = useState();
    const selected = (e) => {
        const getValue = e.target.value;
        setSelect(getValue)
    }

    // call api
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data: cate } = await categoryAPI.get(id);
                setCategory(cate);
            } catch (error) {
                console.log(error)
            }
        }
        getCategory();
    }, [id]);



    // add to cart
    const dispatch = useDispatch();
    const handleClick = (product) => {
        dispatch(addCart({ ...product }))
    }

    const sortLowToHight = _.orderBy(Products, ['price'], ['asc', 'desc']).filter(items => items.category === category._id).map((prod, index) => (
        <div className='w-full max-w-sm mx-auto overflow-hidden shadow-lg' key={index}>
            <Link to={`/product/${prod._id}`}>
                <img src={`${API}/product/photo/${prod._id}`} alt='images' className='rounded-t' />
            </Link>
            <div className='p-4'>
                <Link to={`/product/${prod._id}`}>
                    <h2 className='font-semibold text-md capitalize text-gray-700 text-center hover:text-red-400 transition duration-300'>{prod.name}</h2>
                    <p className='font-light text-gray-500 text-lg my-2 text-center'>$ {prod.price}</p>
                </Link>

                <button onClick={() => handleClick(prod)} className='flex font-semibold border text-gray-200 bg-gray-900 hover:border-gray-900 py-2 px-6 focus:outline-none  my-6 capitalize transition duration-300 hover:text-gray-900 hover:bg-white w-full justify-center'>
                    Add to cart
                </button>
            </div>
        </div>
    ))

    const sortHightToLow = _.orderBy(Products, ['price'], ['desc', 'asc']).filter(items => items.category === category._id).map((prod, index) => (
        <div className='w-full max-w-sm mx-auto overflow-hidden shadow-lg' key={index}>
            <Link to={`/product/${prod._id}`}>
                <img src={`${API}/product/photo/${prod._id}`} alt='images' className='rounded-t' />
            </Link>
            <div className='p-4'>
                <Link to={`/product/${prod._id}`}>
                    <h2 className='font-semibold text-md capitalize text-gray-700 text-center hover:text-red-400 transition duration-300'>{prod.name}</h2>
                    <p className='font-light text-gray-500 text-lg my-2 text-center'>$ {prod.price}</p>
                </Link>

                <button onClick={() => handleClick(prod)} className='flex font-semibold border text-gray-200 bg-gray-900 hover:border-gray-900 py-2 px-6 focus:outline-none  my-6 capitalize transition duration-300 hover:text-gray-900 hover:bg-white w-full justify-center'>
                    Add to cart
                </button>
            </div>
        </div>
    ))




    const feature = Products.map((items, index) => (
        items.feature === 1 &&
        <article key={index} className='sm:grid grid-cols-4 bg-white p-4 lg:col-span-2'>
            <Link to={`/product/${items._id}`}>
                <img src={`${API}/product/photo/${items._id}`} className='w-full' />
            </Link>
            <div className='pt-5 self-center sm:pt-0 sm:pl-5 col-span-3'>
                <p className='text-gray-900 hover:text-red-400 capitalize text-sm font-normal transition duration-300'>
                    <Link to={`/product/${items._id}`}>{items.name}</Link>
                </p>
                <p className='text-gray-500 text-xs pt-1'>$ {items.price}</p>
            </div>
        </article>
    ))

    const categories = Categories.map((category, index) => (
        <ul className="py-3 hind font-normal" key={index}>
            <li className="transition duration-500 ease-in-out transform hover:-translate-y-1  hover:text-red-400 text-md text-gray-900" >
                <Link to={`/category/${category._id}`}>{category.name}</Link>
            </li>
        </ul>
    ))

    return (
        <div className='bg-gray-50'>

            {/* head-line */}
            <div className='h-40' style={{ backgroundImage: `url(${API}/category/photo/${id})` }}>
                <div className='h-24 min-h-full flex items-center justify-center'>
                    <div className='self-center text-center'>
                        <h1 className='text-4xl mb-2 tracking-wider'>{category.name}</h1>
                        <span className='font-bold text-gray-400 text-xs hover:text-black transition duration-300 else-in-out'>
                            <Link to='/'>
                                HOME
                            </Link>
                        </span>
                        <span className='font-normal text-gray-400 text-xs uppercase'> / {category.name}</span>
                    </div>
                </div>
            </div>

            <div className='container mx-auto py-6 px-20'>

                <div className="flex mx-2">
                    <span className='pt-1 text-lg font-light'>Sort By : </span>
                    <div className='relative mx-4 inline-flex'>
                        <span className='w-2 h-2 absolute top-0 right-0 m-3 pointer-events-none'>
                            <IoIosArrowDown />
                        </span>
                        <select onChange={selected}
                            className='border border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none hind font-light text-sm'>
                            <option value='low_to_hight'>Price (Low &gt; High)</option>
                            <option value='hight_to_low'>Price (High &gt; Low)</option>
                        </select>
                    </div>
                </div>



                <main className='md:flex no-wrap md:-mx-2'>
                    <div className='xl:w-9/12 w-full mt-8 mx-4'>
                        <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                            {select === undefined && sortHightToLow}
                            {select === 'hight_to_low' && sortHightToLow}
                            {select === 'low_to_hight' && sortLowToHight}
                        </div>

                    </div>
                    <div className='xl:w-3/12 w-full mt-8 mx-4'>

                        <form className='mb-2'>
                            <input
                                ref={Ref}
                                value={searchTerm}
                                onChange={getSearchTerm}
                                className='p-2 w-full text-gray-800 border border-gray-200 focus:outline-none mb-2'
                                type='text'
                                placeholder=' Search products' />
                            <button type='submit' className='inline-block w-full p-2 text-xs font-medium leading-6 text-center text-white uppercase transition duration-500 bg-red-400 hover:bg-white hover:border-gray-200 hover:text-gray-900 border focus:outline-none border-red-400'>
                                search
                            </button>
                        </form>

                        <div className="border border-gray-200">
                            <h4 className="hind uppercase font-semibold text-center py-4">Categories</h4>
                            <div className="divide-y divide-light-blue-400 px-6">{categories}</div>
                        </div>

                        <div className='mt-12 border border-gray-200'>
                            <p className='uppercase lora font-semibold text-center p-3 text-sm'>
                                featured products
                            </p>
                            {feature}
                        </div>

                    </div>
                </main>

            </div>
        </div>
    )
}

export default Category
