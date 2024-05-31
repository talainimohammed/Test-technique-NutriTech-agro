import React, { useState } from 'react';
import './AddProduct.css';
import ProductService from '../../../Service/ProductService';

const AddProduct = ({ onClose }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [stock, setStock] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('stock', stock);
        await ProductService.postProduct(formData);
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    return (
        <div className='addproduct'>
            <h1>Ajouter Produit</h1>
            <button className='close' onClick={onClose}>X</button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom Produit</label>
                    <input type="text" className="form-control" id="name" placeholder="Nom Produit" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Prix</label>
                    <input type="text" className="form-control" id="price" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" className="form-control" id="image" onChange={handleImageChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input type="text" className="form-control" id="stock" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;