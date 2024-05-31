import React, { useEffect, useState }  from 'react';
import Productservice from '../../../Service/ProductService';
import AddProduct from '../AddProduct/AddProduct';
const ListProduct = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAddProduct, setShowAddProduct] = useState(false);
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
        <div>
            <h1>Liste Des Produits</h1>
            <button onClick={() => setShowAddProduct(true)} className="btn btn-primary">Ajouter Produit</button>
            <br /><br />
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-content collapse show">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Nom Produit</th>
                                            <th scope="col">Prix</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.stock}</td>
                                            <td><img src={"http://localhost:8000/"+item.image} height={50} alt="product logo" /></td>

                                            <td>
                                            <button onClick={async() => {
                                                if (window.confirm('Vous etes sur que vous voulez supprimer ce produit?')) {
                                                    await Productservice.deleteProduct(item.id);
                                                    fetchData();
                                                }
                                                }} className="btn btn-danger">Supprimer</button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showAddProduct && <AddProduct onClose={() => setShowAddProduct(false)} />}
        </div>
    );
};

export default ListProduct;