import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import LeatestProduct from '../LeatesProduct/LeatestProduct';
import Service from '../Service/Service';
import UpcomingCollection from '../UpcomingCollection/UpcomingCollection';


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

            <section className='my-20'>
                <UpcomingCollection></UpcomingCollection>
            </section>

            <section className='my-20'>
                <Service></Service>
            </section>

        </div>
    );
};

export default Home;