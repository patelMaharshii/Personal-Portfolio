import './home.css'
import LogisticIMG from './assets/LogisticIMG.png'
import LinearIMG from './assets/linearIMG.png'
import Frog from './assets/Frog.png'
import Github from './assets/github.jpg'
import UWO from './assets/uwo.jpg'
import { useState,useEffect } from 'react';

export function Projects() {

    const [ position, setPosition ] = useState(0);
    const [ image1, setImage1 ] = useState(false);
    const [ image2, setImage2 ] = useState(false);
    const [ image3, setImage3 ] = useState(false);
    const [ image4, setImage4 ] = useState(false);

    useEffect(() => {

        const updatePosition = () => {
            if(window.scrollY <= 1550) {
                setPosition(-50);
            } else if(window.scrollY >= 2450) {
                setPosition(850);
            } else {
                setPosition(window.scrollY - 1600);
            }
            
        };

        const updateImages = () => {
            const scrollAmount = window.scrollY - 1600
            if(scrollAmount <= 80) {
                setImage1(true);
                setImage2(false);
                setImage3(false);
                setImage4(false);
            } else if(scrollAmount > 80 && scrollAmount <= 440) {
                setImage1(false);
                setImage2(true);
                setImage3(false);
                setImage4(false);
            } else if(scrollAmount > 440 && scrollAmount <= 700) {
                setImage1(false);
                setImage2(false);
                setImage3(true);
                setImage4(false);
            } else {
                setImage1(false);
                setImage2(false);
                setImage3(false);
                setImage4(true);
            }
        }

        window.addEventListener('scroll', updatePosition);
        window.addEventListener('scroll', updateImages);

        return () => {
            window.removeEventListener('scroll', updatePosition);
            window.removeEventListener('scroll', updateImages);
        };
    }, []);

    return(
        <div className="projects-main-container" id='projects'>
            <h1 className='my-projects-title'>Projects 🧠</h1>
            <div className='projects-content-container'>
                <div className="projects-left-content">
                    <div className="project-1">
                        <div className="project-1-top">
                            <h2>🛥️ Predicting Titanic Survival Rate</h2>
                            <a href='https://github.com/patelMaharshii/Predict-Titanic' rel='noopener' target='_blank'><img src={Github}/></a>
                        </div>
                        <ul>
                            <li>Used a combination of gradient descent and logistic regression to predict if an individual would survive the titanic</li>
                            <li>Predictions was based off class, age, gender, fare price, etc</li>
                            <li>Model achieved an accuracy of 91.39%</li>
                        </ul>
                    </div>
                    <div className="project-2">
                        <div className="project-2-top">
                            <h2>📘 Comparing Pure Math vs Gradient Descent</h2>
                            <a href='https://github.com/patelMaharshii/linearregression' rel='noopener' target='_blank'><img src={Github}/></a>
                        </div>
                        <ul>
                            <li>Learned Linear Regression in my Data Science class and no gradient descent was used</li>
                            <li>This project is a comparison between a model which fully calculates the optimal regression versus one that uses gradient descent</li>
                            <li>The model using gradient descent showed an accuracy increase by 85%</li>
                        </ul>
                    </div>
                    <div className="project-3">
                        <div className="project-3-top">
                            <h2>🐸 Frog Finder Algorithm</h2>
                            <a href='https://github.com/patelMaharshii/Pathfinding-Algorithm' rel='noopener' target='_blank'><img src={Github}/></a>
                        </div>
                        <ul>
                            <li>Implemented knownledge of data structures and algorithms to create a pathfinding algorithm</li>
                            <li>Debugged and troubleshooted with the use of a custom user interface</li>
                        </ul>
                    </div>
                    <div className="project-4">
                        <div className="project-4-top">
                            <h2>📷 Photo Tree</h2>
                            <a href='https://github.com/patelMaharshii/Photo-Compression' rel='noopener' target='_blank'><img src={Github}/></a>
                        </div>
                        <ul>
                            <li>Stored images efficiently with the use of linked lists and quadrant trees</li>
                            <li>Programmed an algorithm to assign pixels to different nodes which are then placed in a quadrant tree</li>
                        </ul>
                    </div>
                </div>
                <div  className='project-images'>
                    {image1 && <div style={{marginTop : position + 'px', backgroundColor : "#6ed4f6"}} className="logistic-img">
                        <h2>Understanding Prediction Models</h2>
                        <img src={LogisticIMG}/>
                    </div>}
                    {image2 && <div style={{marginTop : position + 'px', backgroundColor : "#fec865"}} className="linear-img">
                        <h2>Why is It Better?</h2>
                        <img src={LinearIMG}/>
                    </div>}
                    {image3 && <div style={{marginTop : position + 'px', backgroundColor : "#8ceb80"}} className="frog-img">
                        <h2>Let's Help Froggy using Data Structures!</h2>
                        <img src={Frog}/>
                    </div>}
                    {image4 && <div style={{marginTop : position + 'px', backgroundColor : "#dda0dd"}} className="tree-img">
                        <h2>Lights, Cameras... Trees?!</h2>
                        <img src={UWO}/>
                    </div>}
                </div>
            </div>
        </div>
    );
}