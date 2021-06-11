import React, { useState , useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { RiFacebookCircleFill, RiInstagramFill, RiPinterestFill, RiYoutubeFill, RiTwitterFill } from 'react-icons/all'
import blogAPI from '../../../api/blogAPI';
const DetailBlog = ({ Blog }) => {
    const [blog, setBlog] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const getBlog = async () => {
            const { data: blg } = await blogAPI.get(id);
            setBlog(blg);
            window.scrollTo(0,0);
        }
        getBlog();
    }, [id])
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


    return (
        <div className='blog_page'>
        {/* head-line */}
        <div className='h-40' style={{ backgroundColor: '#F8EFEA' }}>
            <div className='h-24 min-h-full flex items-center justify-center'>
                <div className=' self-center text-center'>
                    <h1 className='lora text-4xl mb-2 tracking-wider antialiased'>Blogs</h1>
                    <Link to='/'
                        className='font-bold text-gray-600 text-xs hover:text-black transition delay-300 else-in-out'>
                    HOME</Link>
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
                    <div className="md:p-12 p-6 border border-gray-200">
                        <h3 className="mb-3 text-center text-gray-900 uppercase font-normal md:text-2xl lora w-13">
                            {blog.title}
                        </h3>
                        <div className=" overflow-hidden">
                            <img className="h-auto w-full mx-auto" src={blog.photo} />
                        </div>
                        <p className="text-sm text-gray-500 hover:text-gray-600 leading-6 text-justify mt-6 hind">
                            ${blog.content}</p>
                    </div>

                    <div className="mt-12">
                        <h3 className="font-light text-xl pb-2">Leave a Reply</h3>
                        <p className="font-light text-gray-600">Your email address will not be published.</p>
                        <form className="pt-8">
                            <div className="flex flex-col md:flex-row">
                                <div className="w-full">
                                    <label className="text-xs text-gray-700">Your Comment : <span
                                            className="text-red-600">*</span></label>
                                    <textarea className="w-full border border-gray-200 focus:outline-none" rows={6}></textarea>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row mt-5">
                                <div className="w-full flex-1">
                                    <label className="text-xs text-gray-700 mx-1">Name : <span className="text-red-600">*</span></label>
                                    <div className="my-2 p-1 flex ">
                                        <input className="p-2  w-full text-gray-800 border border-gray-200 focus:outline-none" />
                                    </div>
                                </div>
                                <div className="w-full flex-1">
                                    <label className="text-xs text-gray-700 mx-1">Email : <span
                                            className="text-red-600">*</span></label>
                                    <div className="my-2 p-1 flex ">
                                        <input type="email"
                                            className="p-2 w-full text-gray-800 border border-gray-200 focus:outline-none" />
                                    </div>
                                </div>
                            </div>
                            <button
                                className="mx-1 mt-3 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 hover:bg-red-600 focus:outline-none ">
                                add comment
                            </button>
                        </form>
                    </div>

                </div>

                <div className='w-full md:w-4/12  mt-8 mx-4'>
                    {/* author */}
                    <div className='p-5 border border-gray-200 '>
                        <div className='image overflow-hidden'>
                            <img className='h-auto w-full mx-auto'
                                src='https://handmade-shop.cmsmasters.net/wp-content/uploads/2015/04/1-380x292.jpg' />
                        </div>
                        <h1 className='text-gray-900 font-light lora text-center text-xl leading-8 my-1'>Duong Khanh Duy
                        </h1>
                        <p className='text-sm text-gray-500 hover:text-gray-600 leading-6 text-center'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat consequuntur
                            laudantium facilis voluptatibus! At quidem illo obcaecati molestiae quis.
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
                                <input type='email'
                                    className='py-2.5 w-full md:w-6/12 text-grey-dark text-sm focus:outline-none border border-gray-200 m-0 p-0'
                                    placeholder='your@example.com' />
                                <button type='submit'
                                    className='focus:outline-none w-full md:w-5/12 text-white text-xs p-2.5 bg-red-400 hover:bg-red-600 transition delay-150 ease-in-out'>SUBCRIBE!</button>
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

export default DetailBlog;
