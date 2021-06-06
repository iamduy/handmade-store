import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import productAPI from '../../../api/productAPI'
import categoryAPI from '../../../api/categoryAPI'
import { Link } from 'react-router-dom'
import {API} from '../../../config'
const DetailProduct = ({ Products, Categories }) => {

    const { id } = useParams();
    const [detailProduct, setDetailProduct] = useState({});
    const [SimilarProduct, SetSimilarProduct] = useState([]);

    useEffect(() => {
        const Product = async () => {
            try {
                const { data: prod } = await productAPI.get(id);
                const { data: cate } = await categoryAPI.get(prod.category);
                const catename = cate.name;
                const product = { ...prod, catename };
                setDetailProduct(product);
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
                const getSimilar = Products.map((items, index) => (
                    items.category === prod.category &&
                    <div className="w-full max-w-sm mx-auto overflow-hidden shadow-lg" key={index}>
                        <Link to={`/product/${items._id}`}>
                            <img src={`${API}/product/photo/${items._id}`} alt="" className="rounded-t" />
                        </Link>
                        <div className="p-4">
                            <Link to={`/product/${items._id}`}>
                                <h2 className="font-bold hind uppercase text-center hover:text-red-400 transition duration-500">{items.name}</h2>
                                <p className="font-light text-gray-500 text-lg my-2 text-center">$ {items.price}</p>
                            </Link>

                            <Link to='/'>
                                <span className='inline-block w-full p-2 text-xs font-medium leading-6 text-center text-white uppercase transition duration-500 bg-red-400 hover:bg-white hover:border-gray-200 hover:text-gray-900 border focus:outline-none border-red-400'>Add to cart</span>
                            </Link>
                        </div>
                    </div>
                )).slice(4, 8);
                SetSimilarProduct(getSimilar);
            } catch (error) {
                console.log(error);
            }
        }
        similar();
    }, [id]);


    //list loại sản phẩm
    const categories = Categories.map((category, index) => (
        <ul className="py-3 hind font-normal" key={index}>
            <li className="transition duration-500 ease-in-out transform hover:-translate-y-1  hover:text-red-400 text-md text-gray-900" >
                <Link to={`/category/${category._id}`}>{category.name}</Link>
            </li>
        </ul>
    ))

    const feature = Products.map((items, index) => (
        items.feature === 1 &&
        <article key={index} className='sm:grid grid-cols-4 bg-white p-4 lg:col-span-2'>
            <Link to={`/product/${items._id}`}>
                <img src={`${API}/product/photo/${items._id}`}  className='w-full' />
            </Link>
            <div className='pt-5 self-center sm:pt-0 sm:pl-5 col-span-3'>
                <p className='text-gray-900 hover:text-red-400 capitalize text-sm font-normal lora transition delay-150 else-in-out'>
                    <Link to={`/product/${items._id}`}>{items.name}</Link>
                </p>
                <p className='text-gray-500 text-xs pt-1'>$ {items.price}</p>
            </div>
        </article>
    )).slice(0, 10);


    return (
        <div className='bg-gray-100'>
            <div className="container mx-auto py-6 px-20 my-10">
                <div className="md:flex no-wrap md:-mx-2">
                    <div className="xl:w-9/12 w-full mt-8 mx-4">

                        <section className="text-gray-700 body-font overflow-hidden">

                            <div className="mx-auto flex flex-wrap">
                                <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`${API}/product/photo/${detailProduct._id}`}  />

                                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                    <span className="text-sm title-font text-gray-500 tracking-widest uppercase">{detailProduct.catename}</span>
                                    <h2 className="text-gray-900 text-3xl title-font lora font-medium mb-1 tracking-widest">
                                        {detailProduct.name}
                                    </h2>

                                    <span className="text-xl title-font text-gray-700 tracking-widest">$ {detailProduct.price}</span>

                                    <p className="leading-relaxed py-4 hind">{detailProduct.description}</p>
                                    <div className="border-gray-700 border-b"></div>
                                    <div className="flex">
                                        <button
                                            className="flex mr-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded my-6">
                                            ADD TO CART
                                    </button>

                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="my-10">
                            <p className="lora font-normal text-2xl mb-5">Similar Products</p>
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                                {SimilarProduct}
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-3/12 w-full mt-8 mx-4">
                        <div className="border border-gray-200">
                            <h4 className="hind uppercase font-semibold text-center py-4">Categories</h4>
                            <div className="divide-y divide-light-blue-400 px-6">{categories}</div>
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
