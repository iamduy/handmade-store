import React from 'react'
import { Link } from 'react-router-dom'
import { RiFacebookCircleFill , RiInstagramFill , RiPinterestFill , RiYoutubeFill , RiTwitterFill} from 'react-icons/all'
const Footer = () => {
    return (
        <footer className='bg-gray-200 mt-0.5 pt-10'>
            <div className='max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left'>

                <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>

                    <div className='text-xs uppercase text-gray-900 font-medium mb-6'>
                        Useful links
                        </div>

                    <Link to='/' className='my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
                        Home
                        </Link>
                    <Link to='/blog' className='my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        Blog
                        </Link>
                    <Link to='/shop' className='my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
                        Shop
                        </Link>
                    <Link to='/contact' className='my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
                        Contacts
                        </Link>
                </div>




                <div className='p-5 w-1/2 sm:w-4/12 md:w-3/12'>

                    <div className='text-xs uppercase text-gray-900 font-medium mb-6'>
                        Community
                        </div>


                    <Link to='/' className='my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        GitHub
                        </Link>
                    <Link to='/' className='my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        Discord
                        </Link>
                    <Link to='/' className='my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '>
                        Twitter
                        </Link>
                    <Link to='/' className='my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
                        YouTube
                        </Link>
                </div>


                <div className='p-5  w:1/2  sm:w-4/12 md:w-3/12'>

                    <div className='text-xs uppercase text-gray-900 font-medium mb-6'>About us</div>

                    <p className='my-3 block text-gray-400 text-sm font-medium duration-700'>
                        Apparently we had reached Link great height in the atmosphere, for the sky was Link dead black,
                        and the stars had ceased to twinkle. By the same illusion which lifts</p>
                    <div className='mt-4'>

                        <form>
                            <input type='email' className='p-2 text-grey-dark text-sm h-auto '
                                placeholder='you@example.com' />
                            <button type='submit' className='bg-red-400 text-white h-auto text-xs p-2.5 mx-auto'>SUBCRIBE</button>
                        </form>
                    </div>
                </div>

            </div>


            <div className='pt-2'>
                <div className='flex pb-5 px-3 m-auto pt-5 
                        border-t border-gray-500 text-gray-400 text-sm 
                        flex-col md:flex-row max-w-6xl'>
                    <div className='mt-2'>
                        © Copyright 1998-year. All Rights Reserved.
                        </div>

                    <div className='md:flex-auto md:flex-row-reverse mt-2 flex-row flex'>
                        <Link to='/' className='w-6 mx-1 hover:text-red-400'>
                            <RiFacebookCircleFill />
                        </Link>
                        <Link to='/' className='w-6 mx-1 hover:text-red-400'>
                            <RiInstagramFill/>
                        </Link>
                        <Link to='/' className='w-6 mx-1 hover:text-red-400'>
                            <RiYoutubeFill/>
                        </Link>
                        <Link to='/' className='w-6 mx-1 hover:text-red-400'>
                            <RiTwitterFill/>
                        </Link>
                        <Link to='/' className='w-6 mx-1 hover:text-red-400'>
                            <RiPinterestFill/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
