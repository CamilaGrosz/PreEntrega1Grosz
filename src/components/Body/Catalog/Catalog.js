import React from 'react';
// import { products } from '../../../services/products';
import { Link } from 'react-router-dom';
import './Catalog.css'
import useGetDocuments from '../../../hooks/useGetDocuments';

function Catalog() {
    const {products} = useGetDocuments("products")
    return (
        <div className="card-container">
            {products.map((product) => (
                <div key={product.id} className="card">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={product.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.modelo}</h5>
                            <p className="card-text">{product.precio}</p>
                            <Link to={`/catalog/${product.id}`} className="btn btn-primary">Ver más</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Catalog;