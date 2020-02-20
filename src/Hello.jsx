import React from "react";


const Hello = () => {
  return (
    <div className="hero-image" 
      style={{ 
        backgroundImage: 'url("./src/images/hero2.jpg")', 
        backgroundSize: 'cover', 
        height: '100vh', 
        marginTop: '-1rem',
        display: 'flex',
        alignItems: 'center'
            }}>
      
      <div className="responive ui main container">
        <h1 className= "responive" id="hello">Robin Lillqvist</h1>
        <span className="hello_text">Fullstack Web developer</span>
      </div>

    </div>
  );
};

export default Hello;