import React, {useState } from "react";

const contStyle = {
    textAlign: "center"
}

function ItemCount({stockMax, initial, amount}) {
    const [cantidad, setCantidad] = useState(initial)
    const [carrito, setCarrrito] = useState(0);
    const [stock, setStock] = useState(stockMax);

    function onSuma(){
        if (cantidad < stockMax){
           setCantidad(cantidad + amount);
           setStock(stock - cantidad);
        }
    }

    function onResta(){
        if (cantidad > 0){
            setCantidad(cantidad - amount);
            setStock(stock + cantidad);
        }
    }
    
    function onAdd(){
       
        //setCarrrito(carrito + cantidad)
       
         if ( carrito < stockMax && (cantidad + carrito) <= stockMax) {
            setCarrrito(carrito + cantidad);
        }
        else {
            alert("No me quedan mas VHS bro...");
        }
        
    }

    return <>
        <div style={contStyle}>
           <div> 
            <button onClick={onSuma}>+</button>
            <input type="text" placeholder={cantidad} />
            <button onClick={onResta}  >-</button>
           </div>
           <div> 
             <button onClick={onAdd}>AGREGAR</button>
           </div>
        
            <div>
                En el carrito tenes: {carrito}
            </div>  
        </div>
    </>

}

export default ItemCount;