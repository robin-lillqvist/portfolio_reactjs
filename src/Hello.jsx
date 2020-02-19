import React from "react";


const Hello = () => {
  return (
    <div class="hero-image" style={{ background: 'url("./src/images/hero.jpg")', backgroundSize: 'cover', height: '100vh', marginTop: '-1rem'}}>  
    <div id="flex" className="ui main container">
      <h1 id="hello">Robin Lillqvist</h1>
      <span>something about CraftAcademy and what i'm doing</span>
      <span>something about which languages I like</span>
    </div></div>
  );
};

export default Hello;