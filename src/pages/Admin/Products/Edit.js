import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router';
import productAPI from '../../../api/productAPI';
import { API } from '../../../config'
import Swal from 'sweetalert2'
const ProductEdit = ({ Categories, onEditProduct }) => {

    const history = useHistory();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data: prod } = await productAPI.get(id);
            setProduct(prod);
            reset(prod);
        }
        getProduct();
    }, [])

    const OnHandleSubmit = (data) => {
        let uploads = new FormData();
        if (data.imageNew.length === 0) {
            uploads.append('name', data.name);
            uploads.append('description', data.description);
            uploads.append('price', data.price);
            uploads.append('quantity', data.quantity);
            uploads.append('feature', data.feature);
            uploads.append('status', data.status);
            uploads.append('category', data.category);
            onEditProduct(uploads, data._id);
        } else {
            uploads.append('name', data.name);
            uploads.append('description', data.description);
            uploads.append('price', data.price);
            uploads.append('quantity', data.quantity);
            uploads.append('feature', data.feature);
            uploads.append('status', data.status);
            uploads.append('category', data.category);
            uploads.append('photo', data.imageNew[0]);
            onEditProduct(uploads, data._id);
        }
        history.push('/admin/product/list')
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
                <input type="hidden" {...register('_id')} defaultValue={product._id} />

                <div className='shadow sm:overflow-hidden'>
                    <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
                        <h3 className='lora text-center text-2xl uppercase tracking-widest'>
                            Edit products
                    </h3>
                        <div className='grid grid-cols-6 gap-6'>
                            <div className='col-span-6 sm:col-span-3'>
                                <label className='block text-sm font-medium text-gray-700'>
                                    Name Products
                            </label>
                                <div className='mt-1'>
                                    <input type='text' className={`focus:outline-none border-current border flex-1 block
                                    w-full sm:text-sm border-gray-300 py-2 ${errors.name ? 'border-red-600' : ''}`}
                                        {...register('name', { required: true })} placeholder=' Name products'
                                        defaultValue={product.name} />
                                    <span className='form-message text-red-600 hind text-xs'>
                                        {errors.name && 'Required input field'}
                                    </span>
                                </div>
                            </div>
                            <div className='col-span-6 sm:col-span-3'>
                                <label className='block text-sm font-medium text-gray-700'>Categories</label>
                                <select {...register('category', { required: true })}
                                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                                    {Categories.map((items, index) => (
                                        <option value={items._id} key={index}>
                                            {items.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='grid grid-cols-6 gap-6'>
                            <div className='col-span-6 sm:col-span-3'>
                                <label htmlFor='company_website'
                                    className='block text-sm font-medium text-gray-700'>Price</label>
                                <div className='mt-1'>
                                    <input type='number' className={`focus:outline-none border-current border flex-1 block
                                    w-full sm:text-sm border-gray-300 py-2 ${errors.price ? 'border-red-600' : ''}`}
                                        {...register('price', { required: true })} placeholder=' Price'
                                        defaultValue={product.price} />
                                    <span className='form-message text-red-600 hind text-xs'>
                                        {errors.price && 'Required input field'}
                                    </span>
                                </div>
                            </div>
                            <div className='col-span-6 sm:col-span-3'>
                                <label className='block text-sm font-medium text-gray-700'>Quantity</label>
                                <div className='mt-1'>
                                    <input type='number' className={`focus:outline-none border-current border flex-1 block
                                    w-full sm:text-sm border-gray-300 py-2 ${errors.quantity ? 'border-red-600' : ''}`}
                                        {...register('quantity', { required: true })} placeholder=' Quantity'
                                        defaultValue={product.quantity} />
                                    <span className='form-message text-red-600 hind text-xs'>
                                        {errors.quantity && 'Required input field'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 gap-6'>
                            <div className="col-span-6 sm:col-span-3">
                                <label className="block text-sm font-medium text-gray-700">
                                    Images
                                </label>
                                <div className="relative">
                                    <input
                                        {...register('imageNew')}
                                        type="file"
                                        className="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2"
                                    />
                                </div>
                                <img src={`${API}/product/photo/${id}`}
                                    className="bg-cover bg-center w-60" alt="" />
                            </div>

                            <div className='col-span-6 sm:col-span-3'>
                                <label className='block text-sm font-medium text-gray-700'>Features</label>
                                <select {...register('feature', { required: true })}
                                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                                    <option value={1}>Special</option>
                                    <option value={0}>Normal</option>
                                </select>
                            </div>

                        </div>


                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-sm font-medium text-gray-700">Status</label>
                            <div>
                                <input type="radio" {...register("status")} defaultValue={true} checked />
                            InStock
                        </div>
                            <div>
                                <input type="radio" {...register("status")} defaultValue={false} />
                            OutStock
                        </div>
                        </div>


                        <div className='grid grid-cols-2 gap-6'>
                            <div className='col-span-2 sm:col-span-2'>
                                <label className='block text-sm font-medium text-gray-700'>Description</label>
                                <div className='mt-1'>
                                    <textarea rows={5} className={`focus:outline-none border flex-1 block w-full sm:text-sm
                                    border-gray-300 ${errors.description ? 'border-red-600' : ''}`}
                                        {...register('description', { required: true })} placeholder='  Message....' />
                                    <span className='form-message text-red-600 hind text-xs'>
                                        {errors.description && 'Required input field'}
                                    </span>
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
    )
}

export default ProductEdit
