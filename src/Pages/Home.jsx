import React from 'react';
import Header from '../Components/Header/Header';
import About from '../Components/About/About';
import Homeproducts from '../Components/Homeproducts/Homeproducts';
import Contact from '../Components/Contact/Contact';
import ProductInfo from '../Components/Productinfos/ProductInfo';
const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Homeproducts />
            <Contact />
            <ProductInfo />
        </div>
    );
};

export default Home;