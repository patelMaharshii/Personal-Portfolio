import { Mario } from './Mario.jsx';
import { Home } from './Home.jsx'
import { Techstack } from "./Techstack.jsx";
import { Experience } from './Experience.jsx'
import { Projects } from './Projects.jsx'
import './home.css'

export function Output() {

    return(
        <div className='output-total-content'>
            <Home/>
            {/* <Mario/> */}
            <Techstack/>
            <Projects/>
            <Experience/>
        </div>
    );
}