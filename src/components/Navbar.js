import React from "react";
import CartWidget from "./CartWidget";


const topnav = {
    backgroundColor: "#212121",
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
               <a className="active" href="#home" style={a}>Acción</a>
               <a href="#news" style={a}>Terror</a>
               <a href="#contact" style={a}>Thriller</a>
               <a href="#about" style={a}>Sci-fi</a>
               <CartWidget/>
             </div>  
           </nav>
}

export default Navbar;