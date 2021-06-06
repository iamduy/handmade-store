import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory, useParams } from 'react-router';
import productAPI from '../../../api/productAPI';
import { API } from '../../../config'
const ProductEdit = ({ Categories, onEditProduct }) => {

    const history = useHistory();
    const [data, setData] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const getProduct = async () => {
            const { data: product } = await productAPI.get(id);
            setData(product);
            reset(product);
        }
        getProduct();
    }, [])

    
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const OnHandleSubmit = (datas) => {
        const uploads = new FormData();
        if (datas.imageNew.length === 0) {
            uploads.append('name', datas.name);
            uploads.append('description', datas.description);
            uploads.append('price', datas.price);
            uploads.append('quantity', datas.quantity);
            uploads.append('feature', datas.feature);
            uploads.append('status', datas.status);
            uploads.append('category', datas.category);
            const fakeProduct = {
                ...datas,
                photo: datas.imageOld
            }
            onEditProduct(uploads, fakeProduct);
            history.push('/admin/product/list')
            console.log('data 1: ', fakeProduct)
        } else {
            uploads.append('name', datas.name);
            uploads.append('description', datas.description);
            uploads.append('price', datas.price);
            uploads.append('quantity', datas.quantity);
            uploads.append('feature', datas.feature);
            uploads.append('status', datas.status);
            uploads.append('category', datas.category);
            uploads.append('photo', datas.imageNew[0]);
            const fakeProduct = {
                ...datas,
                photo: datas.imageNew[0]
            }
            onEditProduct(uploads, fakeProduct);
            history.push('/admin/product/list')
            console.log('data 2:', fakeProduct)
        }
    }

    return (
        <div className="container mx-auto px-6 py-8">
            <form onSubmit={handleSubmit(OnHandleSubmit)}>
                <input type="hidden" {...register('_id')} defaultValue={data._id} />

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
                                        defaultValue={data.name} />
                                    <span className='form-message text-red-600 hind text-xs'>
                                        {errors.name && 'Required input field'}
                                    </span>
                                </div>
                            </div>
                            <div className='col-span-6 sm:col-span-3'>
                                <label className='block text-sm font-medium text-gray-700'>Categories</label>
                                <select
                                    className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                                    {Categories.map((items, index) => (
                                        <option {...register('category', { required: true })} value={items._id} key={index}>
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
                                        defaultValue={data.price} />
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
                                        defaultValue={data.quantity} />
                                    <span className='form-message text-red-600 hind text-xs'>
                                        {errors.quantity && 'Required input field'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-6 gap-6'>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor='imageNew' className="block text-sm font-medium text-gray-700">
                                    Images
                            </label>
                                <div className="relative">
                                    <input id='imageNew' type="file"
                                        className="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2"
                                        {...register("imageNew")} />
                                </div>
                                <img src={`${API}/product/photo/${data._id}`}
                                    className="bg-cover bg-center w-60" alt="" />
                                <input type="hidden" defaultValue={data.photo} {...register("imageOld")} />

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
