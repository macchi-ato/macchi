import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { fetchGitHubRepos } from "../../services/githubService"
import "./Home.css"

//components
import Project from "../../components/ProjectCard/ProjectCard"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import ProfileCard from "../../components/ProfileCard/ProfileCard"

export default function Home() {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadRepos = async () => {
            try {
                setLoading(true)
                const data = await fetchGitHubRepos()
                setRepos(data.slice(0, 2))
                setError(null)
            } catch (err) {
                setError("Failed to load projects")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        loadRepos()
    }, [])

    return (
        <div className="home-container">
            <aside className="home-profile">
                <ProfileCard />
            </aside>

            <main className="home-content">
                <section className="home-intro">
                    <div className="intro-container">
                        <h1>Hello! I'm <span id="intro-name">Martin</span></h1>
                        <p>I’m a recent <span>Software Engineering graduate</span> focused on <span>full-stack development</span>. Right now, I’m improving my existing skills while gradually learning new ones, including <span>low-level programming</span> and systems fundamentals. I’m also continuing my education through <span>Georgia Tech’s OMSCS program</span> starting in Fall 2026, where I plan to dive deeper into operating systems and better understand how software behaves beneath the surface.</p>
                    </div>

                    <Link to="/about" className="arrow-link about-arrow">More <span id="arrow">{`->`}</span></Link>
                </section>

                <section className="home-projects">
                    <div className="header-container">
                        <div id="projects-header">
                            <span>{`<`}</span>
                            <h2>Recent Projects</h2>
                            <span>{`/>`}</span>
                        </div>
                        
                        <Link to="/projects" className="arrow-link">View All <span id="arrow">{`->`}</span></Link>
                    </div>

                    {loading ? ( 
                        <LoadingSpinner /> 
                    ) : (
                    error ? (
                        <div className="home-projects-error">
                            <p>{error}</p>
                        </div>
                    ) : <div className="projects">
                        {repos.map((repo) => (
                            <Project
                                key={repo.id}
                                title={repo.name}
                                description={repo.description}
                                language={repo.language}
                                languages={repo.languages}
                            />  
                        ))}
                        </div>
                    )}
                </section>

                <section className="home-extra">
                    <span>Coming Soon</span>
                    <span>Coming Soon</span>
                    <span>Coming Soon</span>
                    <span>Coming Soon</span>
                    <span>Coming Soon</span>
                    <span>Coming Soon</span>
                </section>
            </main>
        </div>
    )
}