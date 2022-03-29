import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line } from 'react-icons/ri'
import { RiCloseLine } from 'react-icons/ri'
import { Header } from '../../containers'

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#experince">Experince</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className=" gradient__back">
        <div className="nav__container">

        <div className="nav__logo">
          <h2>Port</h2>
          <span>folio</span>
        </div>
        <div className="nav__right">
          <div className="nav__links">
            <Menu />
          </div>
          <div className="nav__sign">
            <h4>Sign in</h4>
            <button type="button" className="btn btn-primary">
              Sign up
            </button>
          </div>
        </div>
        <div className="nav__menu-container">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => {
                setToggleMenu(true);
              }}
              />
              )}

          {toggleMenu && (
            <div className="nav__menu-links">
              <Menu />
              <div className="nav__menu-sign">
                <button type="button" className="btn btn-primary">
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
        </div>
        <Header />
      </nav>
    </>
  );
};

export default Navbar;
