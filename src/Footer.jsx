import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="ui container">
      <p id="footer">
        <a href="https://www.linkedin.com/in/robinlillqvist/">
          <img className="contacts" src="https://cdn.worldvectorlogo.com/logos/linkedin-icon.svg"></img></a>
        <a href="https://www.facebook.com/robin.lillqvist">
          <img className="contacts" src="https://cdn.worldvectorlogo.com/logos/facebook-messenger.svg"></img></a>
        <a href="https://twitter.com/Abacuz08">
          <img className="contacts" src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/944px-Twitter_Bird.svg.png"></img></a>
        <a href="https://www.instagram.com/robc0de/">
          <img className="contacts" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"></img></a>
        <a href="mailto:robin.lillqvist@gmail.com?subject=I%20saw%20your%20portfolio...&body=I'm%20interested%20in%20talking%20with%20you!">
          <img className="contacts" src="https://cdn.worldvectorlogo.com/logos/mail-ios.svg"></img></a>
      </p>
      </div>
    </footer>
  );
};

export default Footer;