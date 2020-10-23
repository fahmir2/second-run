import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const cartStyle = {
    fontSize: 35,
    marginTop: 8,
    color: "white",
    
}

function CartWidget() {
    return <ShoppingCartIcon style={cartStyle} />
}

export default CartWidget;