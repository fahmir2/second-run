import React from "react";

const contStyle = {
    textAlign: "center"
}

function ItemListContainer( {Title}) {
    return <> 
            <div className="container" style={contStyle}>
                <p>
                    Los mejores VHS de {Title} del condado
                </p>
            </div>
        </>
}

export default ItemListContainer;