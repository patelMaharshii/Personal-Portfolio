import './home.css'
import LinkedIn from './assets/LinkedIn.png'
import Github from './assets/github.jpg'

export function Home() {

    return(
        <div className='home-container' id='home'>
            <h3>Hey, I'm Maharshii</h3>
            <div className='home-data-science-container'>
                <h1 className='home-data-science'>DATA SCIENCE 📈</h1>
                <p className='home-data-science-p'># Based in Ontario, CAN</p>
            </div>
            <div className='home-machine-learning-container'>
                <button className='home-machine-learning-button'>Let's Connect!</button>
                <h1 className='home-machine-learning'>🤖 MACHINE LEARNING</h1>
            </div>
            <div className='home-software-engineer-container'>
                <h1>&&</h1>
                <h1 className='home-software-engineer'>SOFTWARE ENGINEER 🖥️</h1>
            </div>
            <h2 className='home-product-message'>I create functional code for <span className='span-LLM'>LLM</span>, <span className='span-AI'>AI</span> and <span className='span-other'>other software</span> models</h2>
            <div className='home-socials-links'>
                <a href='https://www.linkedin.com/in/maharshii-patel' rel='noopener' target='_blank'><img className='home-social-linkedin' src={LinkedIn}/></a>
                <a href='https://github.com/patelMaharshii' rel='noopener' target='_blank'><img className='home-social-github' src={Github}/></a>
                <a href='https://www.linkedin.com/in/maharshii-patel/overlay/1724732707467/single-media-viewer/?profileId=ACoAAEfcYbcBmzBI9wVEp8Jkhz6dw5y0jp3lZmk' rel='noopener' target='_blank'><img className='home-social-resume' src='https://www.pngitem.com/pimgs/m/495-4952625_resume-icon-black-and-white-png-download-resume.png'/></a>
            </div>
        </div>
    );

}