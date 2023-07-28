import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import React from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import './CartWidget.css'


function CartWidget(){
    return(
        <div>
            <button type="button" className="btn btn-light"><ShoppingCartCheckoutIcon/>3</button> 
        </div>  
    );
}

export default CartWidget