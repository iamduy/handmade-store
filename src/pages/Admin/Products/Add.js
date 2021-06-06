import React from "react";
import { useHistory } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form'
import { BsCloudUpload } from 'react-icons/all'

const Add = ({ onAddProduct, Categories }) => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const OnHandleSubmit = (data) => {
    let product = new FormData();
    product.append('name', data.name);
    product.append('price', data.price);
    product.append('quantity', data.quantity);
    product.append('photo', data.photo[0]);
    product.append('feature', data.feature);
    product.append('description', data.description);
    product.append('category', data.category);
    product.append('status', true);
    const fakeProduct = {
      ...data,
      photo: data.photo[0],
      status: true
    }
    onAddProduct(product, fakeProduct);
    history.push('/admin/product/list');
  }
  return (
    <div className="container mx-auto px-6 py-8">
      <form onSubmit={handleSubmit(OnHandleSubmit)}>
        <div className='shadow sm:overflow-hidden'>
          <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
            <h3 className='lora text-center text-2xl uppercase tracking-widest'>Add products</h3>

            <div className='grid grid-cols-6 gap-6'>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>
                  Name Products
                </label>
                <div className='mt-1'>
                  <input type='text'
                    className={`focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2  ${errors.name ? 'border-red-600' : ''}`}
                    {...register('name', { required: true })}
                    placeholder=' Name products' />
                  <span className='form-message text-red-600 hind text-xs'>
                    {errors.name && 'Required input field'}
                  </span>
                </div>
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>Categories</label>
                <select className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                  {Categories.map((items, index) => (
                    <option {...register('category')} value={items._id} key={index}>
                      {items.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className='grid grid-cols-6 gap-6'>
              <div className='col-span-6 sm:col-span-3'>
                <label htmlFor='company_website' className='block text-sm font-medium text-gray-700'>Price</label>
                <div className='mt-1'>
                  <input type='number'
                    className={`focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2  ${errors.price ? 'border-red-600' : ''}`}
                    {...register('price', { required: true })}
                    placeholder=' Price' />
                  <span className='form-message text-red-600 hind text-xs'>
                    {errors.price && 'Required input field'}
                  </span>
                </div>
              </div>
              <div className='col-span-6 sm:col-span-3'>
                <label className='block text-sm font-medium text-gray-700'>Quantity</label>
                <div className='mt-1'>
                  <input type='number'
                    className={`focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2  ${errors.quantity ? 'border-red-600' : ''}`}
                    {...register('quantity', { required: true })}
                    placeholder=' Quantity' />
                  <span className='form-message text-red-600 hind text-xs'>
                    {errors.quantity && 'Required input field'}
                  </span>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='col-span-2 sm:col-span-2'>
                <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border border-gray-300 ${errors.photo ? 'border-red-600' : ''}`}>
                  <div className='space-y-1 text-center'>
                    <div className='text-sm text-gray-600'>
                      <label htmlFor='photo' className='relative cursor-pointer'>
                        <span className='flex justify-center text-4xl text-gray-400 hover:text-gray-900 transition duration-300'> <BsCloudUpload />
                        </span>
                      </label>
                      <input id='photo' type='file' className='sr-only'
                        {...register('photo', { required: true })} />
                    </div>
                    <p className='text-xs text-gray-500'>
                      PNG, JPG, GIF up to 10MB
                                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-6 sm:col-span-3'>
              <label className='block text-sm font-medium text-gray-700'>Products types</label>
              <select {...register('feature', { required: true })} className='mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
                <option value={1} >Special</option>
                <option value={0} >Normal</option>
              </select>
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='col-span-2 sm:col-span-2'>
                <label className='block text-sm font-medium text-gray-700'>Description</label>
                <div className='mt-1'>
                  <textarea rows={5}
                    className={`focus:outline-none border flex-1 block w-full sm:text-sm border-gray-300 ${errors.description ? 'border-red-600' : ''}`}
                    {...register('description', { required: true })}
                    placeholder='  Message....'
                  />
                  <span className='form-message text-red-600 hind text-xs'>
                    {errors.description && 'Required input field'}
                  </span>
                </div>
              </div>
            </div>
            <button type='submit' className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Add Products
            </button>

          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
