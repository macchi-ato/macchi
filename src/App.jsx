import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

//components
import Nav from "./components/Navbar/Nav.jsx"
import Footer from "./components/Footer/Footer.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import LoadingScreen from "./components/LoadingScreen/LoadingScreen.jsx"

//context
import { GitHubProvider } from "./context/GitHubContext.jsx"

//pages
import Home from "./pages/Home/Home.jsx"
import Projects from "./pages/Projects/Projects.jsx"
import About from "./pages/About/About.jsx"
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail.jsx"

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false)

  return (
    <GitHubProvider onLoaded={() => setDataLoaded(true)}>
      <LoadingScreen isLoading={!dataLoaded} />

      <BrowserRouter>
        <ScrollToTop />
        <Nav />

        <div className="routes-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </GitHubProvider>
  )
}