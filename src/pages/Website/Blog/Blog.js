import React from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleFill, RiInstagramFill, RiPinterestFill, RiYoutubeFill, RiTwitterFill } from 'react-icons/all'
const BlogPage = ({ Blog }) => {

  const blog_right = Blog.map((blg, index) => (
    <article className='sm:grid grid-cols-4 bg-white p-4 lg:col-span-2' key={index}>
      <Link to={`/blog/${blg._id}`}>
        <img src={blg.photo} className='w-full transform transition duration-500 hover:scale-125' />
      </Link>
      <div className='pt-5 self-center sm:pt-0 sm:pl-5 col-span-3'>
        <p className='text-gray-900 hover:text-red-400 capitalize text-sm font-normal lora transition duration-500 else-in-out'>
          <Link to={`/blog/${blg._id}`}>
            {blg.title}
          </Link>
        </p>
        <p className='text-gray-500 text-xs pt-1'>on December 12, 2016</p>
      </div>
    </article>

  ))

  const blog_left = Blog.map((blg, index) => (
    <div className='mb-6 border border-gray-200 p-8' key={index}>
      <div className='overflow-hidden '>
        <Link to={`/blog/${blg._id}`}>
          <img className='h-auto w-full mx-auto' src={blg.photo} />
        </Link>
      </div>
      <h3 className='my-4 text-justify text-gray-900 hover:text-red-400 transition duration-500 else-in-out font-normal md:text-2xl capitalize'>
        <Link to={`/blog/${blg._id}`}>{blg.title}</Link>
      </h3>
     
      <span className='uppercase font-semibold text-xs text-gray-900 hover:text-gray-400 transition delay-150 else-in-out'>
        <Link to={`/blog/${blg._id}`}>read more</Link>
      </span>
    </div>

  ))
  return (
    <div className='blog_page'>
      {/* head-line */}
      <div className='h-40' style={{ backgroundColor: '#F8EFEA' }}>
        <div className='h-24 min-h-full flex items-center justify-center'>
          <div className=' self-center text-center'>
            <h1 className='lora text-4xl mb-2 tracking-wider antialiased'>Blogs</h1>
            <Link to='/' className='font-bold text-gray-600 text-xs hover:text-black transition delay-300 else-in-out'>HOME</Link>
            <span className='text-gray-400 font-bold uppercase text-xs'> / Blogs</span>
          </div>
        </div>
      </div>

      {/* main-content */}
      <div className='container mx-auto my-10 p-5 px-20'>

        <div className='py-10'>
          <p className='text-center font-light text-5xl text-black py-2 tracking-wider'>
            Handmade Blog
          </p>
          <p className='text-center text-gray-400 font-semibold text-sm'>INSPIRAITON AND TUTORIALS
          </p>
        </div>

        <div className='md:flex no-wrap md:-mx-2'>

          <div className='w-full md:w-8/12 mt-8 mx-4'>
            {blog_left}
          </div>

          <div className='w-full md:w-4/12  mt-8 mx-4'>
            {/* author */}
            <div className='p-5 border border-gray-200 '>
              <div className='image overflow-hidden'>
                <img className='h-auto w-full mx-auto' src='https://handmade-shop.cmsmasters.net/wp-content/uploads/2015/04/1-380x292.jpg' />
              </div>
              <h1 className='text-gray-900 font-light lora text-center text-xl leading-8 my-1'>Duong Khanh Duy</h1>
              <p className='text-sm text-gray-500 hover:text-gray-600 leading-6 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat consequuntur laudantium facilis voluptatibus! At quidem illo obcaecati molestiae quis.
              </p>
              <div className='md:flex-auto mt-2 flex justify-center'>
                <Link to='/' className='w-6 mx-1 hover:text-red-400'>
                  <RiFacebookCircleFill />
                </Link>
                <Link to='/' className='w-6 mx-1 hover:text-red-400'>
                  <RiInstagramFill />
                </Link>
                <Link to='/' className='w-6 mx-1 hover:text-red-400'>
                  <RiYoutubeFill />
                </Link>
                <Link to='/' className='w-6 mx-1 hover:text-red-400'>
                  <RiTwitterFill />
                </Link>
                <Link to='/' className='w-6 mx-1 hover:text-red-400'>
                  <RiPinterestFill />
                </Link>
              </div>
            </div>

            <div className='p-6 mt-12 hidden w-full text-gray-600 md:flex md:flex-col font-light bg-red-100'>
              <div className='p-2'>
                <p className='text-center col-span-2 flex font-light'>
                  Find out about exciting & exclusive updates before anyone else
                </p>
              </div>
              <div className='py-3'>
                <form>
                  <input type='email' className='py-2.5 w-full md:w-6/12 text-grey-dark text-sm focus:outline-none border border-gray-200 m-0 p-0' placeholder='your@example.com' />
                  <button type='submit' className='focus:outline-none w-full md:w-5/12 text-white text-xs p-2.5 bg-red-400 hover:bg-red-600 transition delay-150 ease-in-out'>SUBCRIBE!</button>
                </form>
              </div>
            </div>

            <div className=' border border-gray-200 p-6 mt-12 hidden w-full md:flex'>
              <img src='https://handmade-shop.cmsmasters.net/wp-content/uploads/2016/12/banner.jpg' />
            </div>


            <div className='mt-12 border border-gray-200'>
              <h3 className='uppercase text-center p-3 text-sm'>latest post</h3>
              {blog_right}
            </div>

          </div>
        </div>
      </div>


    </div>
  );
};

export default BlogPage;
