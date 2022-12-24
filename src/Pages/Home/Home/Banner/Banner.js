import React from 'react';
import img1 from '../../../../Assets/banner/david-van-dijk-3LTht2nxd34-unsplash.jpg'
import img2 from '../../../../Assets/banner/liana-mikah-HstwCJX0jT4-unsplash.jpg'
import img3 from '../../../../Assets/banner/pierre-chatel-innocenti-pxoZSTdAzeU-unsplash.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-4/5">
            <div id="slide1" className="carousel-item relative w-full">
                <div className=' w-full '>
                    <img src={img1} alt='' className="w-full h-4/5" />
                </div>
                <div className="absolute hidden md:block flex justify-start flex-col transform -translate-y-1/2 left-16 text-white right-5 top-1/3 ">
                    <h1 className='text-3xl lg:text-6xl text-start font-bold'>
                        Affordable<br />
                        Price For Home <br />
                        Decoration
                    </h1>
                    <p className='w-1/3 hidden lg:block text-white text-start my-8'>There are many variations and colors are available with <strong>60%</strong> off sell.</p>
                    <div className=' hidden lg:flex'>
                        <button className="btn btn-active bg-black text-white border-0 rounded-none">Start Shopping</button>

                        <button className="btn btn-outline border-white text-white mx-4 rounded-none">Leatest Projects</button>

                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-16 top-1/2 ">
                    <a href="#slide2" className="btn btn-circle bg-black border-0 mx-8">❮</a>
                    <a href="#slide2" className="btn bg-black border-0 btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className=' w-full '>
                    <img src={img2} alt='' className="w-full h-4/5" />
                </div>
                <div className="absolute hidden md:block flex justify-center flex-col transform -translate-y-1/2  text-black left-16 right-5  top-1/3 ">
                    <h1 className='text-3xl lg:text-6xl text-center font-bold'>
                        Get The Best<br />
                        Collection For Home <br />
                        Furniture
                    </h1>
                    <p className='w-1/3 hidden lg:block w-1/2 mx-auto text-black text-center my-8'>There are many variations and colors are available with <strong>50%</strong> winter sell.</p>
                    <div className=' hidden lg:flex justify-center'>
                        <button className="btn btn-active bg-black text-white border-0 rounded-none">Start Shopping</button>

                        <button className="btn btn-outline border-white text-white mx-4 rounded-none">Leatest Projects</button>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3 ">
                    <a href="#slide1" className="btn btn-circle bg-black border-0">❮</a>
                    <a href="#slide1" className="btn bg-black border-0 btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;