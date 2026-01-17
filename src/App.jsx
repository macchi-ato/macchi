import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Nav from './components/Navbar/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'

// Pages
import Home from './pages/Home/Home.jsx'
import Projects from './pages/Projects/Projects.jsx'
import About from './pages/About/About.jsx'

export default function App() {

  return (
    <BrowserRouter>
      <Nav />

      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  )
}