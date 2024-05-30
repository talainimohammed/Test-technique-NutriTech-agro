import React from 'react';
import Header from '../Components/Header/Header';
import About from '../Components/About/About';
import Homeproducts from '../Components/Homeproducts/Homeproducts';
import Contact from '../Components/Contact/Contact';
const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Homeproducts />
            <Contact />
        </div>
    );
};

export default Home;