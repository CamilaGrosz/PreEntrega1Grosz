import React, { useEffect, useState } from "react";
import {getDataById} from "../services/productsService"
import { useParams } from "react-router-dom";
import './ProductDetail.css'


const ProductDetail = ({ match }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => { 
        getDataById(id)
        .then((productData) => {
            setProduct(productData);
        })
        .catch((error) => {
            console.error(error);
        });
    }, [id]);

    if (!product) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="product-detail-container">
            <h2>{product.modelo}</h2>
            <p>Características: {product.caracteristicas}</p>
            <p>Precio: {product.precio}</p>
            <p>Color: {product.color}</p>
            <img src={product.img} alt={product.modelo} />
        </div>
    );
};

export default ProductDetail;