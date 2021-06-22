import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import productAPI from '../../../api/productAPI'
import categoryAPI from '../../../api/categoryAPI'
import { Link } from 'react-router-dom'
import { API } from '../../../config'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import settings from '../../../components/Website/Service/slick-slider'
import { useDispatch } from 'react-redux'
import { addCart } from '../../../actions/cartAction'
const DetailProduct = ({ Products, Categories }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [detailProduct, setDetailProduct] = useState({});
    const [SimilarProduct, SetSimilarProduct] = useState([]);

    const handleClick = (product) => {
        dispatch(addCart({ ...product }));
    }

    useEffect(() => {
        const Product = async () => {
            try {
                const { data: prod } = await productAPI.get(id);
                const { data: cate } = await categoryAPI.get(prod.category);
                const catename = cate.name;
                const product = { ...prod, catename };
                setDetailProduct(product);
                window.scrollTo(0, 0);
            } catch (error) {
                console.log(error);
            }
        }
        Product();
    }, [id]);


    // sản phẩm cùng loại ,
    useEffect(() => {
        const similar = async () => {
            try {
                const { data: prod } = await productAPI.get(id);
                const getSimilar = Products.filter(product => product.category === prod.category).map((items, index) => (
                    <div className='w-full max-w-sm mx-auto overflow-hidden px-3' key={index}>
                        <Link to={`/product/${items._id}`}>
                            <img src={`${API}/product/photo/${items._id}`} alt='' className='rounded-t' />
                        </Link>
                        <div className='p-4'>
                            <Link to={`/product/${items._id}`}>
                                <h2 className='font-bold hind uppercase text-center hover:text-red-400 transition duration-500'>{items.name}</h2>
                                <p className='font-light text-gray-500 text-lg my-2 text-center'>$ {items.price}</p>
                            </Link>


                            <button onClick={() => handleClick(items)} className='flex font-semibold border text-gray-200 bg-gray-900 hover:border-gray-900 py-2 px-6 focus:outline-none  my-6 capitalize transition duration-300 hover:text-gray-900 hover:bg-white w-full justify-center'>
                                Add to cart
                            </button>

                        </div>
                    </div>
                ))
                SetSimilarProduct(getSimilar);
            } catch (error) {
                console.log(error);
            }
        }
        similar();
    }, [id]);

    //list loại sản phẩm
    const categories = Categories.map((category, index) => (
        <ul className='py-3 hind font-normal' key={index}>
            <li className='transition duration-500 ease-in-out transform hover:-translate-y-1  hover:text-red-400 text-md text-gray-900' >
                <Link to={`/category/${category._id}`}>{category.name}</Link>
            </li>
        </ul>
    ))

    const feature = Products.map((items, index) => (
        items.feature === 1 &&
        <article key={index} className='sm:grid grid-cols-4 bg-white p-4 lg:col-span-2'>
            <Link to={`/product/${items._id}`}>
                <img src={`${API}/product/photo/${items._id}`} className='w-full' />
            </Link>
            <div className='pt-5 self-center sm:pt-0 sm:pl-5 col-span-3'>
                <p className='text-gray-900 hover:text-red-400 capitalize text-sm font-normal lora transition duration-300'>
                    <Link to={`/product/${items._id}`}>{items.name}</Link>
                </p>
                <p className='text-gray-500 text-xs pt-1'>$ {items.price}</p>
            </div>
        </article>
    ));


    return (
        <div>
            <div className='container mx-auto py-6 px-10 my-10'>
                <div className='md:flex no-wrap md:-mx-2'>
                    <div className='xl:w-9/12 w-full mt-8 mx-4'>

                        <section className='text-gray-700 body-font overflow-hidden'>

                            <div className='mx-auto flex flex-wrap'>
                                <img alt='ecommerce' className='lg:w-1/2 w-full object-cover object-center rounded border-4 border-gray-200' src={`${API}/product/photo/${id}`} />

                                <div className='lg:w-1/2 w-full lg:pl-6 lg:mt-0'>

                                    <p className='text-gray-900 text-xl title-font  font-semibold mb-1 tracking-widest border-b border-gray-400 pb-2'>
                                        {detailProduct.name}
                                    </p>

                                    <div className='grid grid-cols-1 text-sm capitalize border-b border-gray-400 pb-2 mb-2'>
                                        <div className='grid grid-cols-3'>
                                            <div className='px-4 py-2 font-light'>Brand :</div>
                                            <span className=' py-2 font-bold'>
                                                {detailProduct.catename}
                                            </span>
                                        </div>
                                        <div className='grid grid-cols-3'>
                                            <div className='px-4 py-2 font-light'>Availability :</div>
                                            <span className=' py-2 font-light'>
                                                {detailProduct.status ? 'InStock' : 'OutStock'}
                                            </span>
                                        </div>

                                        <div className='grid grid-cols-3'>
                                            <div className='px-4 py-2 font-light'>Price :</div>
                                            <span className=' py-2 font-light'>
                                                $ {detailProduct.price}
                                            </span>
                                        </div>
                                    </div>


                                    <p className='leading-relaxed font-light text-sm capitalize border-b border-gray-400 pb-2 mb-2'>
                                        <span className='font-semibold'>Description</span>  : {detailProduct.description}
                                    </p>


                                    <button onClick={() => { handleClick(detailProduct) }}
                                        className='flex font-semibold border text-gray-200 bg-gray-900 hover:border-gray-900 py-2 px-6 focus:outline-none  my-6 capitalize transition duration-300 hover:text-gray-900 hover:bg-white '>
                                        add to cart
                                    </button>


                                </div>
                            </div>
                        </section>

                        <div className='my-10'>
                            <p className='lora font-normal text-2xl mb-5'>Similar Products</p>
                            <div className="mx-10">
                                <Slider {...settings}>
                                    {SimilarProduct}
                                </Slider>
                            </div>

                        </div>
                    </div>
                    <div className='xl:w-3/12 w-full mt-8 mx-4'>
                        <div className='border border-gray-200'>
                            <h4 className='hind uppercase font-semibold text-center py-4'>Categories</h4>
                            <div className='divide-y divide-light-blue-400 px-6'>{categories}</div>
                        </div>

                        <div className='mt-12 border border-gray-200'>
                            <p className='uppercase lora font-semibold text-center p-3 text-sm'>
                                featured products
                            </p>
                            {feature}
                        </div>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default DetailProduct
