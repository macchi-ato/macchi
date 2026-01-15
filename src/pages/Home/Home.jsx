import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchGitHubRepos } from '../../services/githubService'
import './Home.css'
import profileImg from '../../assets/shanks.jpg'

// Components
import Project from '../../components/Project/Project'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'


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
                <img src={profileImg} alt="Profile" id="profile-img" />

                <div className="profile-links">
                    <a className="profile-link" href="https://github.com/macchi-ato" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M12 .297a12 12 0 00-3.793 23.4c.6.111.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.311.468-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 016.003 0c2.292-1.553 3.299-1.23 3.299-1.23.654 1.653.243 2.874.12 3.176.77.84 1.233 1.911 1.233 3.222 0 4.61-2.803 5.624-5.475 5.921.43.372.815 1.102.815 2.222 0 1.605-.015 2.896-.015 3.292 0 .32.216.694.825.576A12 12 0 0012 .297"></path>
                        </svg>
                    </a>

                    <a className="profile-link" href="https://www.linkedin.com/in/martin-vidal-garibay-2b912929a/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.98h4V24h-4V8.98zM9 8.98h3.84v2.05h.05c.54-1.02 1.86-2.05 3.83-2.05 4.1 0 4.86 2.7 4.86 6.22V24h-4v-7.62c0-1.82-.03-4.16-2.53-4.16-2.54 0-2.93 1.99-2.93 4.04V24H9V8.98z" />
                        </svg>
                    </a>

                    <a className="profile-link" href="mailto:vidalgmartin@hotmail.com" aria-label="Email">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M12 13.065L.75 4.5V19.5A1.5 1.5 0 002.25 21h19.5A1.5 1.5 0 0023.25 19.5V4.5L12 13.065zM12 10.935L23.25 2.5H.75L12 10.935z" />
                        </svg>
                    </a>
                </div>
            </aside>

            <main className="home-content">
                <section className="home-intro">
                    <div className="intro-container">
                        <h1>Hello! I'm <span id="intro-name">Martin</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium consectetur veniam, at mollitia repellat placeat reiciendis corrupti, odit itaque voluptate, facere esse minima sequi cum ab ut nulla fugiat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error temporibus atque deleniti ad illo ea, quibusdam suscipit dolor, sequi nisi autem et quidem, facere impedit. Nesciunt reprehenderit impedit nostrum.
                        </p>
                    </div>

                    <Link to="/about" className="arrow-link">More <span id="arrow">{`->`}</span></Link>
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
                            />  
                        ))}
                        </div>
                    )}
                </section>

                <section className="home-extra">
                    <span>Content</span>
                    <span>Content</span>
                    <span>Content</span>
                    <span>Content</span>
                    <span>Content</span>
                    <span>Content</span>
                </section>
            </main>
        </div>
    )
}