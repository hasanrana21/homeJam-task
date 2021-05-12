import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import ShowCard from '../ShowCard/ShowCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ShowCard></ShowCard>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;