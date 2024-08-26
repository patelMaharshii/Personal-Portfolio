import { HashRouter as Router, Routes, Route, Form } from 'react-router-dom'
import { Output } from './Output.jsx'
import { Navbar } from './Navbar.jsx'
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Navbar/>}>
            <Route path="/" element={<Output/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
