import React, { useState } from 'react';
import { Link } from "react-scroll";
import { Outlet } from 'react-router-dom';
import './navbar.css';

export function Navbar() {

    const [model, setModel] = useState(false);

    const toggleModel = () => {
      setModel(!model)
    };

    if(model) {
      document.body.classList.add('active-model');
    } else {
      document.body.classList.remove('active-model');
    }

    return(
        <div className='navbar-all'>
          <div className='navbar-container'>
            <a href='https://www.linkedin.com/in/maharshii-patel' rel='noopener' target='_blank'><button className="navbar-left-button">🧑🏾 Maharshii Patel</button></a>
            <div className='navbar-center-container'>
                <Link to='home' smooth={true} duration={500} spy={true} offset={-200}><button className='navbar-home-button'>🏠 Home</button></Link>
                <Link to='techstack' smooth={true} duration={500} spy={true} offset={-265}><button className='navbar-techstack-button'>⚙️ Techstack</button></Link>
                <Link to='projects' smooth={true} duration={500} spy={true} offset={-80}><button className='navbar-projects-button'>🧠 Projects</button></Link>
                <Link to='experience' smooth={true} duration={500} spy={true} offset={-80}><button className='navbar-experience-button'>💼 Experience</button></Link>
            </div>
              <button onClick={toggleModel} className='navbar-right-button'>📞 Contact me</button>
          </div>
          <main>
            {model && (<div className="model">
              <div className="overlay" onClick={toggleModel}></div>
              <div className="model-content">
                <div className="model-top-part">
                  <h2>Contact Me</h2>
                  <button className="close-model" onClick={toggleModel}>❌</button>
                </div>
                <p><b>Email</b>: maharshiip13@gmail.com</p>
                <p><b>Phone Number</b>: +1 (647) 803 9009</p>
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/aa10ab5d-82c2-40e3-a748-6d12d7b3702a/devnwfm-22dabb27-9d10-42ed-b30c-8cdf8efcb687.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FhMTBhYjVkLTgyYzItNDBlMy1hNzQ4LTZkMTJkN2IzNzAyYVwvZGV2bndmbS0yMmRhYmIyNy05ZDEwLTQyZWQtYjMwYy04Y2RmOGVmY2I2ODcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CNzBI_jZKnx6vOTm_1vTlRulsY3jw3VyM8sGePrfbVs'/>
              </div>
            </div>)}
            <Outlet/>
          </main>
        </div>
    );

}