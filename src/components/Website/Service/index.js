import React from 'react'
import { AiOutlineSkype, BiRefresh , FaShippingFast } from 'react-icons/all'
const Service = () => {
    return (
        <div>
            <div className="w-full bg-left-top bg-auto bg-repeat-x" style={{ backgroundImage: `url(https://www.wallpaperup.com/uploads/wallpapers/2013/12/14/195248/3068c7f3ac18868f32bc50bbf3773454-700.jpg)`, height: 400 }}>
            </div>

            <div className="-mt-64 mx-auto hind">
                <div className="w-full text-center">
                    <p className="text-sm tracking-widest text-white font-bold text-gray-200">
                        SHOP UNIQUE HAND MADE ITEMS
                    </p>
                    <h3 className="font-extralight text-3xl text-white ">
                        Exclusive Items Created With Love
                    </h3>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 hind  ">
                    <div className="p-2 sm:p-10 text-center mx-auto">
                        <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-gray-900">
                            <div className="space-y-10 text-white">

                                <div className='flex justify-center text-6xl'>
                                    <AiOutlineSkype />
                                </div>

                                <div className="px-6">
                                    <div className="space-y-5 tracking-widest">
                                        <div className="font-bold text-xl mb-2">SPECIAL DISCOUNT</div>
                                        <p className="text-base font-light">
                                            Get attracttive offers day by day
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 sm:p-10 text-center  mx-auto">
                        <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-yellow-400 text-white">
                            <div className="space-y-10">
                            <div className='flex justify-center text-6xl'>
                                    <FaShippingFast />
                                </div>
                                <div className="px-6">
                                    <div className="space-y-5 tracking-widest">
                                        <div className="font-bold text-xl mb-2">FAST DELIVERY</div>
                                        <p className="text-base font-light ">
                                            Same day delivery as soon as possible
                                      </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 sm:p-10 text-center mx-auto">
                        <div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-gray-900 text-white">
                            <div className="space-y-10">

                                <div className='flex justify-center text-6xl'>
                                    <BiRefresh />
                                </div>

                                <div className="px-6">
                                    <div className="space-y-5 tracking-widest">
                                        <div className="font-bold text-xl mb-2">100% MONEY BACK</div>
                                        <p className="text-base font-light">
                                            We care about our customers
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
