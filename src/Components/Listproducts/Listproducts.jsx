import React, { useEffect, useState } from 'react';
import './Listproducts.css';
import Product from '../Product/Product';
import Productservice from '../../Service/ProductService';
const productStyle = {
    color: 'red',
    backgroundColor: 'yellow',
    // add more styles as needed
};
const Listproducts = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
          const result = await Productservice.getProducts();
          setData(result);
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
        <div className='listproducts'>
            <h1>Nos Produits</h1>
            {data.map((item) => (
                <Product className='product' productItem={item}/>
            ))}
        </div>
    );
};

export default Listproducts;