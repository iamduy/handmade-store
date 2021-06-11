import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/all'
import { API } from '../../../config'
import _ from 'lodash'

const Product = ({ Products, Categories, PaginationProduct, productPerPage, totalProduct, paginate }) => {

  // pagination
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(Products.length / productPerPage); i++) {
    pageNumber.push(i);
  }

  // order by
  const [select, setSelect] = useState();
  const selected = (e) => {
    const getValue = e.target.value;
    setSelect(getValue)
  }

  const sortLowToHight = _.orderBy(PaginationProduct, ['price'], ['asc', 'desc']).map((prod, index) => (
    <div className='w-full max-w-sm mx-auto overflow-hidden shadow-lg' key={index}>
      <Link to={`/product/${prod._id}`}>
        <img src={`${API}/product/photo/${prod._id}`} alt='images' className='rounded-t' />
      </Link>
      <div className='p-4'>
        <Link to={`/product/${prod._id}`}>
          <h2 className='font-semibold text-md capitalize text-gray-700 text-center hover:text-red-400 transition duration-300'>{prod.name}</h2>
          <p className='font-light text-gray-500 text-lg my-2 text-center'>$ {prod.price}</p>
        </Link>

        <button data-id={prod._id} className='inline-block w-full p-2 text-xs font-medium leading-6 text-center text-white uppercase transition duration-500 bg-red-400 hover:bg-white hover:border-gray-200 hover:text-gray-900 border focus:outline-none border-red-400 add-to-cart'>
          Add to cart
             </button>
      </div>
    </div>
  ))

  const sortHightToLow = _.orderBy(PaginationProduct, ['price'], ['desc', 'asc']).map((prod, index) => (
    <div className='w-full max-w-sm mx-auto overflow-hidden shadow-lg' key={index}>
      <Link to={`/product/${prod._id}`}>
        <img src={`${API}/product/photo/${prod._id}`} alt='images' className='rounded-t' />
      </Link>
      <div className='p-4'>
        <Link to={`/product/${prod._id}`}>
          <h2 className='font-semibold text-md capitalize text-gray-700 text-center hover:text-red-400 transition duration-300'>{prod.name}</h2>
          <p className='font-light text-gray-500 text-lg my-2 text-center'>$ {prod.price}</p>
        </Link>

        <button data-id={prod._id} className='inline-block w-full p-2 text-xs font-medium leading-6 text-center text-white uppercase transition duration-500 bg-red-400 hover:bg-white hover:border-gray-200 hover:text-gray-900 border focus:outline-none border-red-400 add-to-cart'>
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
        <p className='text-gray-900 hover:text-red-400 capitalize text-sm font-normal lora transition delay-150 else-in-out'>
          <Link to={`/product/${items._id}`}>{items.name}</Link>
        </p>
        <p className='text-gray-500 text-xs pt-1'>$ {items.price}</p>
      </div>
    </article>
  ));

  const categories = Categories.map((category, index) => (
    <ul className='py-3 hind font-normal' key={index}>
      <li className='transition duration-500 ease-in-out transform hover:-translate-y-1  hover:text-red-400 text-md text-gray-900' >
        <Link to={`/category/${category._id}`}>{category.name}</Link>
      </li>
    </ul>
  ))

  return (
    <div className='bg-gray-50'>

      {/* head-line */}
      <div className='h-40' style={{ backgroundColor: '#F8EFEA' }}>
        <div className='h-24 min-h-full flex items-center justify-center'>
          <div className='self-center text-center'>
            <h1 className='lora text-4xl mb-2'>Shop</h1>
            <span className='font-bold text-gray-400 text-xs hover:text-black transition duration-300 else-in-out'>
              <Link to='/'>
                HOME
                </Link>
            </span>
            <span className='font-bold text-gray-400 text-xs'> / SHOP</span>
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
              <option value='default'>Default</option>
              <option value='low_to_hight'>Price (Low &gt; High)</option>
              <option value='hight_to_low'>Price (High &gt; Low)</option>
            </select>
          </div>
        </div>




        <main className='md:flex no-wrap md:-mx-2'>
          <div className='xl:w-9/12 w-full mt-8 mx-4'>

            <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              {select === undefined && sortHightToLow}
              {select === 'default' && sortHightToLow}
              {select === 'hight_to_low' && sortHightToLow}
              {select === 'low_to_hight' && sortLowToHight}
            </div>

            <ul className='flex my-8'>
              <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg cursor-pointer">
                <span className="mx-1 flex items-center font-bold">previous</span>
              </li>
              {pageNumber.map((items) => (
                <button key={items} onClick={() => paginate(items)} className='font-bold focus:outline-none rounded-lg focus:bg-gray-700 mx-1 px-3 py-2 bg-gray-200 text-gray-700 focus:text-gray-200'>
                  {items}
                </button>
              ))}
              <li className="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer">
                <span className="mx-1 flex items-center font-bold">Next</span>
              </li>
            </ul>

          </div>
          <div className='xl:w-3/12 w-full mt-8 mx-4'>
            <form className='mb-2'>
              <input className='p-2 w-full text-gray-800 border border-gray-200 focus:outline-none mb-2' type='text' id='search' placeholder=' Search products' />
              <button type='submit' className='inline-block w-full p-2 text-xs font-medium leading-6 text-center text-white uppercase transition duration-500 bg-red-400 hover:bg-white hover:border-gray-200 hover:text-gray-900 border focus:outline-none border-red-400'>
                search
              </button>
            </form>

            <div className='border border-gray-200'>
              <h4 className='hind uppercase font-semibold text-center py-4'>Categories</h4>
              <div className='divide-y divide-light-blue-400 px-6'>{categories}</div>
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
  );
};

export default Product;
