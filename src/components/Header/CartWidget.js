import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import React, { useEffect, useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import './CartWidget.css'
import { Link } from 'react-router-dom';
import useGetDocuments from '../../hooks/useGetDocuments';


function CartWidget(){
    const {products} = useGetDocuments("orders")
    const [cantProductos, setCantProductos] = useState(0)

    useEffect(() => {
        setCantProductos(products.length)
    }, [products])

    return(
        <div>
            <Link to='/checkout' className='cart-widget btn btn-light'><ShoppingCartCheckoutIcon/>{cantProductos}</Link>
        </div>  
    );
}

export default CartWidget