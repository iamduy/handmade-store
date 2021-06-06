import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/all'
import Service from '../../../components/Website/Service';
import { API } from '../../../config';
const Home = ({ Blog, Categories, Products }) => {

  const categories = Categories.map((category, index) => (
    <div key={index} className='mt-2 w-full h-64 md:mx-4 rounded-md overflow-hidden bg-center md:w-1/2'
      style={{ backgroundImage: `url(${API}/category/photo/${category._id})` }}>
      <div className='bg-gray-900 bg-opacity-25 flex items-center h-full'>
        <div className='px-10 max-w-xl'>
          <h2 className='text-2xl text-white font-normal tracking-widest lora'>{category.name}</h2>
          <p className='mt-2 text-gray-300'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, aut? Fugit, eum!
          </p>
          <button
            className='flex items-center mt-4 text-white text-sm uppercase font-medium rounded  focus:outline-none hover:text-gray-300 transition duration-500'>
            <Link to={`/category/${category._id}`}>View now</Link>
            <span className='text-xl ml-2'><HiOutlineArrowNarrowRight /></span>
          </button>
        </div>
      </div>
    </div>
  )).slice(0,2);

  const product = Products.map((product, index) => (
    <div className='my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3' key={index}>
      <article className='overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <Link to={`/product/${product._id}`}>
          <img className='block h-auto w-full' src={`${API}/product/photo/${product._id}`} alt='images' />
        </Link>
      </article>
    </div>
  )).slice(0, 3);

  const blog = Blog.map((items, index) => (
    <div key={index} className='lg:m-4 shadow-md hover:shadow-lg rounded-lg bg-white my-12 mx-8'>
      <img src={items.photo} className='overflow-hidden' alt='images' />
      <div className='p-4'>
        <Link to={`/blog/${items._id}`}>
          <h3 className='font-medium text-gray-600 text-lg my-2 uppercase hover:text-red-400 transition duration-300'>{items.title}</h3>
        </Link>
        <p className='text-justify text-gray-600 text-sm'>{items.content}</p>
        <div className='mt-5'>
          <Link to={`/blog/${items._id}`}
            className='font-bold uppercase text-gray-900 hover:text-red-400 transition duration-300'>Read
                More</Link>
        </div>
      </div>
    </div>
  ))


  return (
    <div className='container my-12 mx-auto px-4 md:px-12'>

      <div className='py-10'>
       
        <p className='text-center font-light text-5xl text-black py-2 tracking-widest'>Categories</p>
      </div>

      <div className='md:flex mt-8 md:-mx-4'>
        {categories}
      </div>

      <div className='py-10'>
        <p className='text-center font-light text-5xl text-black py-2 font-serif'>New Arrivals</p>
        <p className='text-center text-gray-400 font-semibold text-sm'>NEW LIMITED COLLECTION</p>
      </div>

      <div className='flex justify-center'>
        <Link to='/shop'>
          <span className='hover:border-gray-900 hover:bg-white border border-red-400 font-normal hover:text-gray-900 px-5 py-2 transition duration-500 ease-in-out bg-red-400 text-white uppercase hind'>
            more products
            </span>
        </Link>
      </div>

      <div className='flex flex-wrap -mx-1 lg:-mx-4 my-8'>
        {product}
      </div>


      <Service />

      <div className='py-10'>
        <p className='text-center font-light text-5xl text-black py-2 lora'>Handmade Blog</p>
        <p className='text-center text-gray-400 font-semibold text-sm'>INSPIRAITON AND TUTORIALS</p>
      </div>
      <div className='relative items-center justify-center'>
        <div className='lg:flex items-center container mx-auto my-auto'>{blog}</div>
      </div>

    </div>
  );
};

export default Home;
