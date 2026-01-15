import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import Nav from './components/Navbar/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'

// Pages
import Home from './pages/Home/Home.jsx'
import Projects from './pages/Projects/Projects.jsx'

export default function App() {

  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}