import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';


const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>

            <section className='-mt-32'>
                <Categories></Categories>
            </section>
        </div>
    );
};

export default Home;