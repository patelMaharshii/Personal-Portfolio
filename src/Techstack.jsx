import Pandas from './assets/pandas.ico'
import Numpy from './assets/numpy.svg'
import Seaborn from './assets/seaborn.svg'
import Matplotlib from './assets/matplotlib.png'
import Pytorch from './assets/pytorch.png'
import Python from './assets/python.png'
import HTML from './assets/html.png'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import './home.css'

export function Techstack() {
    
    return(
        <div className='techstack-main-container'>
            <h1 className='my-tech-stack-title'>My Tech Stack ⚙️</h1>
            <div id='techstack' className='home-techstack-container'>
                <div className='home-techstack-data-science'>
                    <h2>Data Science</h2>
                    <div className='home-data-science-icons'>
                        <Tippy content='Numpy'><img src={Numpy}/></Tippy>
                        <Tippy content='Pandas'><img src={Pandas}/></Tippy>
                        <Tippy content='Seaborn'><img src={Seaborn}/></Tippy>
                        <Tippy content='Matplotlib'><img src={Matplotlib}/></Tippy>
                        <Tippy content='SciPy'><img src='https://numfocus.org/wp-content/uploads/2017/11/scipy_logo300x300.png'/></Tippy>
                    </div>
                </div>
                <div className='home-techstack-AI'>
                    <h2>Machine Learning/AI</h2>
                    <div className='home-AI-icons'>
                        <Tippy content='TensorFlow'><img src='https://user-images.githubusercontent.com/40668801/42043955-fbb838a2-7af7-11e8-9795-7f890e871d13.png'/></Tippy>
                        <Tippy content='Keras'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png'/></Tippy>
                        <Tippy content='Scikit Learn'><img className='home-scikit-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/260px-Scikit_learn_logo_small.svg.png'/></Tippy>
                        <Tippy content='PyTorch'><img src={Pytorch}/></Tippy>
                    </div>
                </div>
                <div className='home-techstack-swe-web'>
                    <h2>SWE & Web Development</h2>
                    <div className='home-swe-web-icons'>
                        <Tippy content='C++'><img src='https://upload.wikimedia.org/wikipedia/commons/3/32/C%2B%2B_logo.png'/></Tippy>
                        <Tippy content='Python'><img src={Python}/></Tippy>
                        <Tippy content='JavaScript'><img className='javascript-logo' src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'/></Tippy>
                        <Tippy content='Java'><img src='https://static-00.iconduck.com/assets.00/java-icon-512x512-kvr1nudq.png'/></Tippy>
                        <Tippy content='HTML5'><img src={HTML}/></Tippy>
                        <Tippy content='CSS'><img src='https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png'/></Tippy>
                        <Tippy content='Node.js'><img src='https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-png-transparent.png'/></Tippy>
                        <Tippy content='React.js'><img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'/></Tippy>
                        <Tippy content='Swift'><img className='swift-logo' src='https://developer.apple.com/swift/images/swift-og.png'/></Tippy>
                        <Tippy content='Vercel'><img className='vercel-logo' src='https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png'/></Tippy>
                    </div>
                </div>
                <div className='home-techstack-management'>
                    <h2>Management & Tools</h2>
                    <div className='home-management-icons'>
                        <Tippy content='Git'><img src='https://cdn.freebiesupply.com/logos/large/2x/git-icon-logo-png-transparent.png'/></Tippy>
                        <Tippy content='Github'><img className='github-logo' src='https://pngimg.com/uploads/github/github_PNG83.png'/></Tippy>
                        <Tippy content='MS Office'><img src='https://www.freeiconspng.com/thumbs/office-icon/office-2013-icon--circle-iconset--martz90-0.png'/></Tippy>
                        <Tippy content='Figma'><img src='https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png'/></Tippy>
                    </div>
                </div>
            </div>
        </div>
    );
}