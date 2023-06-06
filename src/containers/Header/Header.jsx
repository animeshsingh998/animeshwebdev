import React from 'react';
import './header.css';
import AI from '../../assets/ai.png';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <>
      <header className="gradient__back">
        <div className="header__container" id="header">
          <div className="header__left-side">
            <motion.h5 animate={{x: [-200, 0]}} transition={{duration: 2}}>Hello I'm</motion.h5>
            <motion.h1 className="gradient__text" animate={{x: [0, 10, 0]}} transition={{repeat: Infinity, duration: 4}}>Animesh Singh</motion.h1>
            <motion.p animate={{x: [-200, 0]}} transition={{duration: 2}}>
              I live in Ahmedabad, Gujarat and I'm currently doing B.Tech in
              Computer Engineering. I am a FullStack Webdeveloper but I also
              have interest in other fields like Game Developement with Unity and software development using Python language.
            </motion.p>
            <div className="header__btns">
              <a href='/Animesh_cv.pdf' download={true} className="btn-large btn-outline">Download CV</a>
              <a href="#contact" className="btn-large btn-primary">
                Let's Talk
              </a>
            </div>
          </div>
          <motion.div className="header__right-side" animate={{y: [0, -30, 0]}} transition={{repeat: Infinity, duration: 4}}>
            <img src={AI} alt="ai" />
          </motion.div>
        </div>
      </header>
    </>
  );
}

export default Header