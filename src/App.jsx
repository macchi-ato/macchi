import './App.css'

// Components
import Nav from './components/Navbar/Nav.jsx'
import Footer from './components/Footer/Footer.jsx'

// Pages
import Home from './pages/Home/Home.jsx'

export default function App() {

  return (
    <>
      <Nav />

      <Home />

      <Footer />
    </>
  )
}