import React from 'react'
import './experince.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiSqlite } from "react-icons/si";

const Experince = () => {
  return (
    <>
      <section className="experince__section">
        <div className="experince__section-container" id="experince">
          <div className="experince__section-container__left">
            <h1 className="gradient__text">Experience</h1>
            <p>
              I am FullStack Web-developer, I use ReactJS for front-end and Python Django for Back-end programming. For the Databases I use SQL and sometimes MongoDB. One of my friend "Ansh Rajput" helped me alot in my Journey. I am still a learner and I don't accept orders yet. All of my important skills are mentioned above:
            </p>
            <button type="button" className="btn-large btn-primary">
              Contact me
            </button>
          </div>
          <div className="experince__section-container__right">
            <article className="experince__card">
              <AiFillHtml5 size={27} color="red" />
              <h3>HTML5</h3>
              <p>The HTML5 is used to build basic structure for web pages.</p>
            </article>
            <article className="experince__card">
              <FaCss3 size={27} color="blue" />
              <h3>CSS3</h3>
              <p>The CSS3 is used to add custom design in the web pages.</p>
            </article>
            <article className="experince__card">
              <SiJavascript size={27} color="yellow" />
              <h3>JavaScript</h3>
              <p>
                JavaScript is used to handle events and logical events in web
                pages.
              </p>
            </article>
            <article className="experince__card">
              <FaReact size={27} color="violet" />
              <h3>ReactJS</h3>
              <p>ReactJS is a Library that is used in Front-End developing.</p>
            </article>
            <article className="experince__card">
              <SiDjango size={27} color="green" />
              <h3>Djnago</h3>
              <p>Django is a python framework for Back-End programming.</p>
            </article>
            <article className="experince__card">
              <SiSqlite size={27} />
              <h3>SQLlite</h3>
              <p>
                SQLlite is a database that is used to handle user data in web
                pages.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experince