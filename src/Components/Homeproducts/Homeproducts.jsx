import React, { useEffect, useState } from 'react';
import './Homeproducts.css';
import Product from '../Product/Product';
import Productservice from '../../Service/ProductService';
const Homeproducts = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchData = async () => {
        try {
          const result = await Productservice.getProducts();
          setData(result.slice(-4));
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
    useEffect(() => {
        fetchData();
      }, []);
    
      if (loading) {
        return <div>Loading...</div>;
      }
        return (
        <div className='homeproduct'>
            <h1>Nos Produits</h1>
            {data.map((item, index) => (
                <Product className='productstyle' productItem={item} />
            ))}
            <a href='/products' className='btn'>Voir tous les produits</a>
        </div>
    );
};

export default Homeproducts;