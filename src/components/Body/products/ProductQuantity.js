import './ProductQuantity.css'
const ProductQuantity = ({quantity, setQuantity}) => {

    // Función para incrementar la cantidad
    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };
    // Función para decrementar la cantidad
    const decrementQuantity = () => {
        if (quantity > 1) {
        setQuantity(quantity - 1);
        }
    };

    return (
        <div className="product-detail-container">
            <p>Cantidad: {quantity}</p>
            <button className="decrement" onClick={decrementQuantity}>-</button>
            <button className="increment" onClick={incrementQuantity}>+</button>
        </div>
    );
}

export default ProductQuantity