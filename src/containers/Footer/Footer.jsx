import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__container-top">
          <div className="footer__icons">
            <a
              href="https://www.instagram.com/_big_fat_panda_007/"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram size={30} />
            </a>
            <a href="www.facebook.com" target="_blank">
              <FaFacebookSquare size={30} />
            </a>
            <a
              href="https://www.github.com/animeshsingh998"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={30} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC5E3w654FMVOau0MvNnPaLQ"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoYoutube size={30} />
            </a>
          </div>
        </div>
        <div className="footer__Container-down">
          <h3>This website is designed and &copy;Copyrighted by Animesh</h3>
        </div>
      </div>
    </>
  );
}

export default Footer