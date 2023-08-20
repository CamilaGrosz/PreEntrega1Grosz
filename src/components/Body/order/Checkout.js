import { useEffect, useState } from "react";
import useGetDocuments from "../../../hooks/useGetDocuments"
import './Checkout.css'

const Checkout = () => {
    const {products} = useGetDocuments("orders")
    const [total, setTotal] = useState(0);

    // Calcular la cuenta total
    useEffect(() => {
        let totalPrice = 0;
        products.forEach((order) => {
            totalPrice += order.precio * order.cantidad;
        });
        setTotal(totalPrice);
    }, [products]);
    
    return (
        <div className="checkout-container">
            <h2>Resumen de Compra</h2>
            <div className="order-cards">
                {products.map((order, index) => (
                    <div key={index} className="order-card">
                        <h3>Producto #{index + 1}</h3>
                        <p>Modelo: {order.modelo}</p>
                        <p>Color: {order.color}</p>
                        <p>Cantidad: {order.cantidad}</p>
                        <p>Precio Unitario: ${order.precio}</p>
                        <p>Total por Producto: ${order.precio * order.cantidad}</p>
                    </div>
                ))}
            </div>
            <p>Total de Compra: ${total}</p>
        </div>
    );
};

export default Checkout;
