import { getFirestore, getDocs, collection, where, query } from "firebase/firestore";
import { useEffect, useState } from "react";


const useGetDocumentFiltered = (collectionName, key, condition, condition2) =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const productCollection = collection(db, collectionName)
        const conditions = where(key, condition, condition2)
        const q = query(productCollection, conditions)
        getDocs(q).then((snapshot) => {
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
    }, 
    []);
    return{products}
}

export default useGetDocumentFiltered;