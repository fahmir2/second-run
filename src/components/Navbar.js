import React from "react";

const topnav = {
    backgroundColor: "black",
    overflow: "hidden",
    textAlign: "right",
    display: "flex",
    justifyContent: "right",
    paddingRight: 100
}

const a = {
    float: "left",
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    fontSize: 17,
    padding: 15,
}






function Navbar() {
    return <nav>
            <div className="topnav" style={topnav}>
               <a className="active" href="#home" style={a}>Shop</a>
               <a href="#news" style={a}>Ofertas</a>
               <a href="#contact" style={a}>Nuevos</a>
               <a href="#about" style={a}>Contacto</a>
             </div>  
           </nav>
}

export default Navbar;