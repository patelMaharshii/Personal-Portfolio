import './home.css'
import Zero from './assets/ZERO.png'

export function Experience() {

    return(
        <div className='experience-main-container' id='experience'>
            <h1 className='my-experience-title'>Experience ‍💼</h1>
            <div className="experience-1">
                <div className="experience-1-text">
                    <h2>Web Developer Intern</h2>
                    <p>Choco Cakes ~ May 2024 to August 2024</p>
                    <ul>
                        <li>Developed a <b>React.js</b> website to streamline user order management, optimizing data organization into CSV format for seamless administrative access</li>
                        <li>Collaborated closely with the team to ensure efficient task completion, proactively mitigating potential obstacles before they could impact workflow</li>
                        <li>Enhanced page traffic and retention rates by <b>12%</b> through optimizing site speed and enhancing user interface aesthetics</li>
                    </ul>
                </div>
                <img className='experience-1-image' src='https://www.rainbownourishments.com/wp-content/uploads/2021/02/vegan-strawberry-cupcakes-1..jpg'/>
            </div>
            <div className="experience-2">
                <img className='experience-2-image' src='https://www.brampton.ca/EN/residents/Recreation/Programs-Activities/PublishingImages/programs/Swimming/image-lifeguards.jpg'/>
                <div className="experience-2-text">
                    <h2>Swimming Instructor/Lifeguard</h2>
                    <p>City of Brampton ~ Sept 2022 to Present</p>
                    <ul>
                        <li>Taught <b>over 200</b> youth on lifesaving swimming skills to develop a future team within the lifesaving society</li>
                        <li>Dealt with emergency situations in a professional and efficient manner</li>
                        <li>Expanded my current knowledge of swimming, teaching, and lifesaving techniques</li>
                    </ul>
                </div>
            </div>
            <div className="experience-3">
                <div className="experience-3-text">
                    <h2>Co-Founder/ML Engineer</h2>
                    <p>Zero Inc. ~ July 2024 to Present</p>
                    <ul>
                        <li>Founded a company that provides <b>data solutions</b> to businesses developing <b>large language models, artificial intelligence</b>, and other advanced software systems</li>
                        <li>Conducted research on how machine learning models and AI can be used to create optimal datasets, enhancing model accuracy</li>
                        <li>Collaborated with teammates to allocate tasks based on individual strengths and weaknesses, ensuring effective team performance</li>
                    </ul>
                </div>
                <img className='experience-3-image' src={Zero}/>
            </div>
        </div>
    );
}