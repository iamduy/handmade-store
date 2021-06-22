import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { RiErrorWarningLine, IoMdCheckmarkCircleOutline } from 'react-icons/all'
import { OnSignUp } from '../../auth'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');


    const OnhandleSubmit = (data, e) => {
        const fakeUser = {
            ...data,
            avatar: 'https://i.pinimg.com/564x/22/17/06/221706b37f6eded76f599f22725f3681.jpg'
        }

        OnSignUp(fakeUser).then(dataInput => {
            if (dataInput.error) { // nếu lỗi 
                setError(dataInput.error)
                setSuccess(false);
            } else {
                e.target.reset();
                setError('');
                setSuccess(true);
            }
        })

    }

    const showError = () => (
        <div className={`flex justify-around items-center m-1 font-medium p-2 rounded-md text-red-100 bg-red-700 border border-red-700 ${error ? 'block' : 'hidden'}`}>
            <span className='text-xl'><RiErrorWarningLine /></span>
            <div className="text-md font-normal max-w-full flex-initial tracking-wider">
                {error}
            </div>
        </div>
    )
    const showSuccess = () => (
        <div className={`flex justify-around items-center m-1 font-medium p-2 rounded-md text-green-100 bg-green-700 border border-green-700 ${success ? 'block' : 'hidden'}`}>
            <span className='text-xl'><IoMdCheckmarkCircleOutline /></span>
            <div className="text-md font-normal max-w-full flex-initial tracking-wider">
                Successful Account Registration ,
                <Link to='/signin'><span className='underline hover:text-blue-400'>Login Here</span></Link>
            </div>
        </div>
    )
    return (
        <div className="bg-gray-100 font-family-karla h-screen">
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl hind tracking-widest mb-2">Register</p>
                        {showSuccess()}
                        {showError()}
                        <form onSubmit={handleSubmit(OnhandleSubmit)} className="flex flex-col pt-2 md:pt-5">
                            <div className="flex flex-col pt-4">
                                <label htmlFor="username" className="text-lg hind font-normal">User Name
                                <span className="text-red-600 font-bold">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="username"
                                        {...register('username', { required: true })}
                                        className={`${errors.username ? 'border-red-600' : ''} border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900`} />
                                    {errors.username && <span className="err absolute right-3 top-3 text-xs text-red-600" >This field is required</span>}
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg hind font-normal">Password
                                <span className="text-red-600 font-bold">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id="password"
                                        {...register('password', { required: true })}
                                        className={`${errors.password ? 'border-red-600' : ''} border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900`} />
                                    {errors.password && <span className="err absolute right-3 top-3 text-xs text-red-600" >This field is required</span>}
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg hind font-normal">Name
                                <span className="text-red-600 font-bold">*</span>
                                </label>
                                <div className="relative">
                                    <input type="text" id="name"
                                        {...register('name', { required: true })}
                                        className={`${errors.name ? 'border-red-600' : ''} border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900`} />
                                    {errors.name && <span className="err absolute right-3 top-3 text-xs text-red-600" >This field is required</span>}
                                </div>
                            </div>
                            <div className="flex flex-col pt-4">
                                <label htmlFor="email" className="text-lg hind font-normal">Email
                                <span className="text-red-600 font-bold">*</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="email"
                                        {...register('email', { required: true })}
                                        className={`${errors.email ? 'border-red-600' : ''} border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900`} />
                                    {errors.email && <span className="err absolute right-3 top-3 text-xs text-red-600" >This field is required</span>}
                                </div>
                            </div>
                            <button type="submit"
                                className="tracking-widest hind hover:bg-white text-white font-normal text-lg border hover:border-black bg-black hover:text-black p-2 mt-8 transition duration-500">CREATE
                            AN ACCOUNT</button>
                            <Link to="/signin" className="font-normal text-gray-900 mt-2">BACK TO LOGIN</Link>
                        </form>
                    </div>
                </div>

                <div className="w-1/2 shadow-2xl">
                    <img className="object-cover w-full h-screen hidden md:block opacity-75"
                        src="https://firebasestorage.googleapis.com/v0/b/shop-ea818.appspot.com/o/images%2Fbanner-login.jpg?alt=media&token=f02f2464-2545-47f4-832d-7e5408f579d7" />
                </div>
            </div>
        </div>
    )
}

export default SignUp
