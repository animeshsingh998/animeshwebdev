import React from 'react'
import './header.css'
import AI from '../../assets/ai.png'

const Header = () => {
  return (
    <>
      <header>
        <div className="header__container" id='header'>
          <div className="header__left-side">
            <h5>Hello I'm</h5>
            <h1 className='gradient__text'>Animesh Singh</h1>
            <p>I live in Ahmedabad, Gujrat and I'm currently doing B.Tech in Computer Engineering. I am a FullStack Webdeveloper but i also have interest in other fields like Game Developement with Unity.</p>
            <div className="header__btns">
              <button className="btn-large btn-outline">Download CV</button>
              {/* <button className="btn-large btn-primary">Let's Talk</button> */}
              <a href="#contact" className='btn-large btn-primary'>Let's Talk</a>
            </div>
          </div>
          <div className="header__right-side">
            <img src={AI} alt="ai" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header