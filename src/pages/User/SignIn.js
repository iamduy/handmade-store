import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom';
import { RiErrorWarningLine } from 'react-icons/all'
import { authenticate, OnSignIn } from '../../auth'

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const OnhandleSubmit = (data) => {

        setLoading(true);
        OnSignIn(data).then(dataUser => {
            if (dataUser.error) { // nếu lỗi 
                setError(dataUser.error)
                setLoading(false);
            } else {
                authenticate(dataUser, () => {
                    history.push('/');
                });
            }
        })

    }

    const showError = () => (
        <div className={`flex justify-center items-center m-1 font-medium p-2 rounded-md text-red-100 bg-red-700 border border-red-700 ${error ? 'block' : 'hidden'}`}>
            <span className='text-xl mr-2'><RiErrorWarningLine /></span>
            <div className="text-md font-normal max-w-full flex-initial tracking-wider">
                {error}
            </div>
        </div>
    )
    const showLoading = () => (
        loading && <div className='text-center'>...Loading</div>
    )
    return (
        <div className="bg-gray-100 font-family-karla h-screen">
            <div className="w-full flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col">
                    <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p className="text-center text-3xl hind tracking-widest mb-2">
                            Welcome to  <span className='text-blue-400'>W-1914</span>
                        </p>
                        {showLoading()}
                        {showError()}
                        <form onSubmit={handleSubmit(OnhandleSubmit)} className="flex flex-col pt-2 md:pt-5">

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

                            <div className="flex flex-col pt-4">
                                <label htmlFor="password" className="text-lg hind font-normal">
                                    Password
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


                            <button type="submit"
                                className="tracking-widest hind hover:bg-white text-white font-normal text-lg border hover:border-black bg-black hover:text-black p-2 mt-8 transition duration-500">LOGIN
                            </button>
                            <div className="text-center pt-12 pb-12">
                                <p>Don't have an account? <Link to="/signup" className="font-semibold hind hover:underline hover:text-gray-600 transition duration-500">Register here.</Link></p>
                            </div>

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

export default SignIn
