import React from "react";


const Hello = () => {
  return (
    <div className="hero-image" 
      style={{ 
        backgroundImage: 'url("./src/images/hero3_test.jpg")', 
        backgroundSize: 'cover', 
        height: '100vh', 
        marginTop: '-1rem',
        display: 'flex',
        alignItems: 'center'
            }}>
      
      <div className="responive ui main container">
        <div className= "hello_text_top"></div>
        <div><span className="hello">Hello, I'm </span><span className="hello differentcolor">Robin Lillqvist</span></div>
        <span className="hello_text">QA turned junior fullstack web developer</span>
      </div>

    </div>
  );
};

export default Hello;