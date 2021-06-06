import React from "react";
import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form'
import { BsCloudUpload } from 'react-icons/all'

const CategoryAdd = ({ onAddCategory }) => {
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const OnHandleSubmit = (data) => {
        let category = new FormData();
        category.append('name', data.name);
        category.append('photo', data.photo[0]);

        const fakeCategory = {
            ...data,
            photo: data.photo[0],
        }
        onAddCategory(category, fakeCategory);
        history.push('/admin/category/list');
    }
    return (
        <div className="container mx-auto px-6 py-8">
            <form onSubmit={handleSubmit(OnHandleSubmit)}>
                <div className='shadow sm:overflow-hidden'>
                    <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                        <h3 className='lora text-center text-2xl uppercase tracking-widest'>Add Categories</h3>

                        <div className='col-span-6 sm:col-span-3'>
                            <label className='block text-sm font-medium text-gray-700'>
                                Name Products
                        </label>
                            <div className='mt-1'>
                                <input type='text' className={`focus:outline-none border-current border flex-1 block w-full
                                sm:text-sm border-gray-300 py-2 ${errors.name ? 'border-red-600' : ''}`}
                                    {...register('name', { required: true })} placeholder=' Name category' />
                                <span className='form-message text-red-600 hind text-xs'>
                                    {errors.name && 'Required input field'}
                                </span>
                            </div>
                        </div>


                        <div className='grid grid-cols-2 gap-6'>
                            <div className='col-span-2 sm:col-span-2'>
                                <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border border-gray-300
                                ${errors.photo ? 'border-red-600' : ''}`}>
                                    <div className='space-y-1 text-center'>
                                        <div className='text-sm text-gray-600'>
                                            <label htmlFor='photo' className='relative cursor-pointer'>
                                                <span
                                                    className='flex justify-center text-4xl text-gray-400 hover:text-gray-900 transition duration-300'>
                                                    <BsCloudUpload />
                                                </span>
                                            </label>
                                            <input id='photo' type='file' className='sr-only' {...register('photo', {
                                                required: true
                                            })} />
                                        </div>
                                        <p className='text-xs text-gray-500'>
                                            PNG, JPG, GIF up to 10MB
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type='submit'
                            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                            Send
                    </button>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default CategoryAdd;
