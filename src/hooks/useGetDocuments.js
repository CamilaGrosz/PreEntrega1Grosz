import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const useGetDocuments = (props) =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const productCollection = collection(db, props);
        getDocs(productCollection).then((snapshot) => {
            if(snapshot.size > 0) {
                const products = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProducts(products)
            }
        })
    }, []);
    return{products}
}

export default useGetDocuments;