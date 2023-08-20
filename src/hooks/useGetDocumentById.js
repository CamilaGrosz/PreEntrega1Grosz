import { getFirestore, doc, getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";


const useGetDocumentById = (collectionName, id) => {
    const [product, setProduct] = useState(null)


    // Obtener por id.
    useEffect(() => {
        const db = getFirestore();
        const productRef = doc(db, collectionName, id);
        getDoc(productRef).then((snapshot) => {
            if(snapshot.exists()) {
                const product = {id: snapshot.id, ...snapshot.data()}
                setProduct(product)
            }
        })
    }, []);

    return {product}

}


export default useGetDocumentById