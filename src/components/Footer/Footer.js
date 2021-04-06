import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWhatsapp,
    faLinkedin,
    faFacebook,
    faInstagram,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
  import './Footer.css';

function Footer() {
    return (
<footer>

<div className="social__container">
   <div className="twelve columns">

        <div className="social__container">
        <h3>My Social Links</h3>
        <div className="icons">
        <a href="https://www.linkedin.com/in/andrew-irorere-b63a601b8/"
        className="whatsapp social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
       </a>
       <a href="https://www.whatsapp.com/+2348164078594"
        className="linkedin social">
       <FontAwesomeIcon icon={faWhatsapp} size="1x" />
        </a>
       <a href="https://github.com/andreyscott"
       className="facebook social">
      <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.instagram.com/andrayscott/"
      className="instagram social">
       <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
      <a href="https://web.facebook.com/andrey.king.188/"
      className="instagram social">
       <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      </div>
      <ul className="copyright">
              <li>&copy; Copyright 2020 by Andreyscott @Andreyscott301@gmail.com</li>
           </ul>
           
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
        </div>
     </div>
  </footer>
    )
}

export default Footer;
