import React from 'react'
const AboutPage = () => {
    return (
        <div>
           
            <div className="container mx-auto px-20 py-20">
                <h3 className="text-center font-light lora text-3xl">Hello, I am Khanh Duy </h3>
                {/*blog 1 */}
                <div className="section py-16 w-full scree font- grid md:grid-cols-2 text-gray-800">
                    <div className="subsec flex-none overflow-hidden">
                        <img className="w-full"
                            src="https://i.pinimg.com/564x/bc/59/f4/bc59f455f7a8b799eb438f3a3daca40d.jpg" alt="" />
                    </div>
                    <div className="my-auto p-8">
                        <div className="font-light text-3xl mb-5 lora">
                            I’m Blogger, Handmade, Hipster
                        </div>
                        <div className="desc text-lg dance">
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                            illum dolore eu feugiat. Lorem ipsum dolor sit amet, cosectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad
                            minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat.
                        </div>
                    </div>
                </div>
                {/*blog 2 */}
                <div className="section py-16 w-full scree font- grid md:grid-cols-2 text-gray-800">
                    <div className="subsec my-auto p-8">
                        <div className="font-light text-3xl mb-5 lora">
                            I live and work in New York
                        </div>
                        <div className="desc text-lg dance">
                            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
                            illum dolore eu feugiat. Lorem ipsum dolor sit amet, cosectetuer adipiscing elit, sed diam
                            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                            ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                            ea commodo consequat.
                        </div>
                    </div>
                    <div className="flex-none overflow-hidden">
                        <img className="w-full"
                            src="https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg" alt="" />
                    </div>
                </div>
                {/*blog 3 */}
                <div className="section py-16 w-full scree font- grid md:grid-cols-2 text-gray-800">
                    <div className="subsec flex-none overflow-hidden">
                        <img className="w-full"
                            src="https://i.pinimg.com/564x/a3/6c/bc/a36cbc1047673a25302e71c495254c75.jpg" alt="" />
                    </div>
                    <div className="subsec my-auto p-8">
                        <div className="font-light text-3xl mb-5 lora">
                            Watch my personal blog on youtube
                        </div>
                        <div className="desc text-lg dance">We've seen it all kinds of ways, with different types of
                            flours, but we settled on almond flour for its nutty flavor. We also mix in spices—Italian
                            seasoning and garlic powder—to give it more flavor. We skip yeast because it can be a pain
                            and instead incorporate eggs and olive oil. The eggs help make the crust fluffy.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
