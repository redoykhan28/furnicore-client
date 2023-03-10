import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../Assets/banner/david-van-dijk-3LTht2nxd34-unsplash.jpg'
import img2 from '../../../Assets/banner/liana-mikah-HstwCJX0jT4-unsplash.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-4/5">
            <div id="slide1" className="carousel-item relative w-full">
                <div className=' w-full '>
                    <img src={img1} alt='' className="w-full h-4/5" />
                </div>
                <div className="absolute flex justify-start flex-col transform -translate-y-1/2 left-16 text-white right-5 top-1/3 ">
                    <div data-aos="zoom-in">
                        <h1 className=' text-xl md:text-3xl lg:text-6xl text-start font-bold'>
                            Affordable<br />
                            Price For Home <br />
                            Decoration
                        </h1>
                        <p className='w-1/3 hidden lg:block text-white text-start my-8'>There are many variations and colors are available with <strong>60%</strong> off sell.</p>
                        <div className=' hidden lg:flex'>
                            <Link to={'/categories'} className="btn btn-active bg-warning text-white border-0 rounded-none hover:text-white hover:bg-warning ">Start Shopping</Link>

                            <a href='#leatest' className="btn btn-outline border-white text-white mx-4 rounded-none">Leatest Products</a>

                        </div>
                    </div>
                    <div data-aos="fade-down" className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 lg:right-16 top-1/2 ">
                        <a href="#slide2" className="btn btn-circle bg-warning border-0 text-white mx-8 hover:bg-warning">❮</a>
                        <a href="#slide2" className="btn bg-warning text-white border-0 btn-circle hover:bg-warning">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className=' w-full '>
                    <img src={img2} alt='' className="w-full h-4/5" />
                </div>
                <div className="absolute flex justify-center flex-col transform -translate-y-1/2  text-black left-5 lg:left-16 right-5  top-1/3 ">
                    <h1 className='text-xl md:text-3xl lg:text-6xl text-center font-bold'>
                        Get The Best<br />
                        Collection For Home <br />
                        Furniture
                    </h1>
                    <p className=' hidden lg:block w-1/2 mx-auto text-black text-center my-8'>There are many variations and colors are available with <strong>50%</strong> winter sell.</p>
                    <div className=' hidden lg:flex justify-center'>
                        <Link to={'/categories'} className="btn btn-active bg-warning text-white border-0 hover:bg-dark rounded-none">Start Shopping</Link>

                        <a href='#leatest' className="btn btn-outline border-white text-white mx-4 rounded-none">Leatest Projects</a>

                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3 ">
                    <a href="#slide1" className="btn btn-circle text-white bg-warning hover:bg-warning border-0">❮</a>
                    <a href="#slide1" className="btn bg-warning hover:bg-warning text-white border-0 btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;