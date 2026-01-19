import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchGitHubRepos } from '../../services/githubService'
import './Home.css'

// Components
import Project from '../../components/ProjectCard/ProjectCard'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

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
            <ProfileCard />

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
                    <span>Loading...</span>
                    <span>Loading...</span>
                    <span>Loading...</span>
                    <span>Loading...</span>
                    <span>Loading...</span>
                    <span>Loading...</span>
                </section>
            </main>
        </div>
    )
}