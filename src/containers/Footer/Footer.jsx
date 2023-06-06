import React from 'react'
import './footer.css'
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__container-top">
          <div className="footer__icons">
            <a
              href="https://www.instagram.com/_big_fat_panda_007/"
              target="__blank"
              rel="noreferrer"
            >
              <BsInstagram size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/animesh-singh-02929624b/"
              target="__blank"
            >
              <BsLinkedin size={30} />
            </a>
            <a
              href="https://www.github.com/animeshsingh998"
              target="__blank"
              rel="noreferrer"
            >
              <BsGithub size={30} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC5E3w654FMVOau0MvNnPaLQ"
              target="__blank"
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