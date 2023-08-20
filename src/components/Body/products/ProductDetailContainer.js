import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetailContainer.css'
import useGetDocumentById from "../../../hooks/useGetDocumentById";
import ProductQuantity from "./ProductQuantity";
import addToCart from "../buy/addToCart";


const ProductDetailContainer = () => {
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1)

    const {product} = useGetDocumentById("products", id)
    

    if (!product) {
        return <div>Cargando...</div>;
    }

    const addProduct = () => {
        addToCart({productDetail: product, quantity})
        console.log("pasa por aca")
    }

    return (
        <div className="product-detail-container">
            <h2>{product.modelo}</h2>
            <p>Características: {product.caracteristicas}</p>
            <p>Precio: {product.precio}</p>
            <p>Color: {product.color}</p>
            <img src={product.img} alt={product.modelo} />
            <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
            <button onClick={addProduct}>Agregar al Carrito</button>
        </div>
    );
};

export default ProductDetailContainer;