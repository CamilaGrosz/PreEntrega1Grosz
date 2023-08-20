import { addDoc, collection, getFirestore } from "firebase/firestore";

const addToCart = async (props) => { 
    const db = getFirestore();
    try {
        const orderRef = collection(db, "orders");
        const newOrder = {
            modelo: props.productDetail.modelo,
            color: props.productDetail.color,
            precio: props.productDetail.precio,
            cantidad: props.quantity,
        };
        
        // Agregar el documento a la colección "orders" y espera a que se resuelva
        const docRef = await addDoc(orderRef, newOrder);
        console.log("Producto agregado con ID: ", docRef.id);
    } catch (error) {
        console.error("Error al agregar el producto al carrito:", error);
    }
};

export default addToCart;