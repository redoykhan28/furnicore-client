import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import LeatestProduct from '../LeatesProduct/LeatestProduct';


const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>

            <section className='lg:-mt-32'>
                <Categories></Categories>
            </section>

            <section className='mt-20'>
                <LeatestProduct></LeatestProduct>
            </section>
        </div>
    );
};

export default Home;