import React from "react";


const Hello = () => {
  return (
    <div className="hero-image" 
    style={{ 
      background: 'url("./src/images/hero.jpg")', 
      backgroundSize: 'cover', 
      height: '100vh', 
      marginTop: '-1rem',
      display: 'flex',
      alignItems: 'center'
      }}>
      <div id="flex" className="ui main container">
        <h1 id="hello">Robin Lillqvist</h1>
        <span className="hello_text">Fullstack Webdeveloper</span>
      </div>
    </div>
  );
};

export default Hello;