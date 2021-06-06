import React from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookCircleFill, RiInstagramFill, RiPinterestFill, RiYoutubeFill, RiTwitterFill } from 'react-icons/all'

const ContactPage = () => {
    
    return (
        <div className='contact_page'>
            <div className='container mx-auto my-10 p-5'>
                <div className='md:flex no-wrap md:-mx-2'>
                    <div className='w-full md:w-3/12 md:mx-2 mt-8'>
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
                    </div>

                    <div className='w-full md:w-9/12 md:mx-2 mt-8'>
                        <div>
                            <h3 className="text-center font-light lora text-4xl pb-5">
                                Contact Me for Cooperation
                    </h3>
                            <form className="p-8">
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-full mx-2">
                                        <label htmlFor="comment" className="text-xs text-gray-700">Your Comment : <span
                                            className="text-red-600">*</span></label>
                                        <textarea className="w-full border border-gray-300 focus:outline-none" rows={10} id="comment"
                                        />
                                        <span className=" form-message text-red-600 hind text-xs" />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row mt-5">
                                    <div className="w-full mx-2">
                                        <label htmlFor="name" className="text-xs text-gray-700 mx-1">Name : </label>
                                        <div className="my-2 p-1">
                                            <input type="text" placeholder="Name"
                                                className="p-2 px-2 w-full text-gray-800 border border-gray-300 focus:outline-none"
                                            />
                                            <span className="form-message text-red-600 hind text-xs" />
                                        </div>
                                    </div>
                                    <div className="w-full mx-2">
                                        <label htmlFor="email" className="text-xs text-gray-700 mx-1">Email : </label>
                                        <div className="my-2 p-1">
                                            <input type="email" placeholder="Example@gmail.com"
                                                className="p-2 px-2 w-full text-gray-800 border border-gray-300 focus:outline-none"
                                            />
                                            <span className="form-message text-red-600 hind text-xs" />
                                        </div>
                                    </div>
                                    <div className="w-full mx-2">
                                        <label className="text-xs text-gray-700 mx-1">Phone : </label>
                                        <div className="my-2 p-1">
                                            <input type="text" placeholder="Phone"
                                                className="p-2 px-2 w-full text-gray-800 border border-gray-300 focus:outline-none"
                                            />
                                            <span className="form-message text-red-600 hind text-xs" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit"
                                    className="mx-3 mt-3 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 hover:bg-red-600 focus:outline-none ">
                                    submit comment
                        </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ContactPage
