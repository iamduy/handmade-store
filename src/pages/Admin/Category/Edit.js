import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router';
import categoryAPI from '../../../api/categoryAPI';
import { API } from '../../../config'
import Swal from 'sweetalert2'
const CategoryEdit = ({ onEditCategory }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const history = useHistory();
    const [cate, setCate] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const getCate = async () => {
            const { data: category } = await categoryAPI.get(id);
            setCate(category);
            reset(category);
        }
        getCate();
    }, []);

    const OnHandleSubmit = (data) => {
        let uploads = new FormData();
        if (data.imageNew.length === 0) {
            uploads.append('name', data.name);
            onEditCategory(uploads, data._id);
        } else {
            uploads.append('name', data.name);
            uploads.append('photo', data.imageNew[0]);
            onEditCategory(uploads, data._id);
        }
        history.push('/admin/category/list');
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className="container mx-auto px-6 py-8">
            <form onSubmit={handleSubmit(OnHandleSubmit)}>
                <input type="hidden" {...register('_id')} defaultValue={cate._id} />
                <div className='shadow sm:overflow-hidden'>
                    <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                        <h3 className='lora text-center text-2xl uppercase tracking-widest'>Edit Categories</h3>

                        <div className='col-span-6 sm:col-span-3'>
                            <label className='block text-sm font-medium text-gray-700'>
                                Name category
                        </label>
                            <div className='mt-1'>
                                <input
                                    defaultValue={cate.name}
                                    type='text'
                                    className={`focus:outline-none border-current border flex-1 block w-full
                                sm:text-sm border-gray-300 py-2 ${errors.name ? 'border-red-600' : ''}`}
                                    {...register('name', { required: true })}
                                    placeholder=' Name category'

                                />
                                <span className='form-message text-red-600 hind text-xs'>
                                    {errors.name && 'Required input field'}
                                </span>
                            </div>
                        </div>


                        <div className='grid grid-cols-2 gap-6'>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor='imageNew' className="block text-sm font-medium text-gray-700">
                                    Images
                            </label>
                                <div className="relative">
                                    <input id='imageNew' type="file"
                                        className="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2"
                                        {...register("imageNew")} />
                                </div>
                                <img src={`${API}/category/photo/${id}`}
                                    className="bg-cover bg-center w-60" alt="" />
                                <input type="hidden" defaultValue={cate.photo} {...register("imageOld")} />

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
    )
}

export default CategoryEdit
