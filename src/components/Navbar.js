import React from "react";

const topnav = {
    backgroundColor: "white",
    overflow: "hidden",
    textAlign: "right",
    display: "flex",
    justifyContent: "right",
    paddingRight: 100
}

const a = {
    float: "left",
    color: "green",
    textAlign: "center",
    textDecoration: "none",
    fontSize: 17,
    padding: 15,
}




function Navbar() {
    return <nav>
            <div className="topnav" style={topnav}>
               <img url="https://i.pinimg.com/originals/65/e3/79/65e379e79a18f79dcae0cd14307fa60c.jpg"></img>
               <a className="active" href="#home" style={a}>Home</a>
               <a href="#news" style={a}>News</a>
               <a href="#contact" style={a}>Contact</a>
               <a href="#about" style={a}>About</a>
             </div>  
           </nav>
}

export default Navbar;