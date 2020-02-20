import React from "react";


const Hello = () => {
  return (
    <div className="hero-image" 
      style={{ 
        backgroundImage: 'url("./src/images/hero3.jpg")', 
        backgroundSize: 'cover', 
        height: '100vh', 
        marginTop: '-1rem',
        display: 'flex',
        alignItems: 'center'
            }}>
      
      <div className="responive ui main container">
        <div className= "hello_text_top"></div>
        <div className="hello">Hello, I'm <span className="differentcolor">Robin Lillqvist</span></div>
        <span className="hello_text">Junior fullstack web developer</span>
      </div>

    </div>
  );
};

export default Hello;