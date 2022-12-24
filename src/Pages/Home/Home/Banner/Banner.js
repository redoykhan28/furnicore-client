import React from 'react';
import img1 from '../../../../Assets/banner/david-van-dijk-3LTht2nxd34-unsplash.jpg'
import img2 from '../../../../Assets/banner/liana-mikah-HstwCJX0jT4-unsplash.jpg'
import img3 from '../../../../Assets/banner/pierre-chatel-innocenti-pxoZSTdAzeU-unsplash.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" alt='slide1' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" alt='slide3' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" alt='slide3' />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;