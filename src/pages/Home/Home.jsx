import { Link } from "react-router-dom"
import { useGitHub } from "../../context/GitHubContext"
import { FiMapPin, FiSunrise, FiClock, FiHeart } from "react-icons/fi"
import "./Home.css"

//components
import Project from "../../components/ProjectCard/ProjectCard"
import ProfileCard from "../../components/ProfileCard/ProfileCard"

export default function Home() {
    const { repos: allRepos, error } = useGitHub()
    const repos = allRepos.slice(0, 2)

    return (
        <div className="home-container">
            <aside className="home-profile">
                <ProfileCard />
            </aside>

            <main className="home-content">
                <section className="home-intro">
                    <div className="intro-container">
                        <h1>Hello! I'm <span id="intro-name">Martin</span></h1>
                        <p>I’m a recent <span>Software Engineering Graduate</span> focused on <span>Full-Stack Development</span>. Right now, I’m improving my existing skills and diving deeper into low-level programming and systems fundamentals. This fall, I’m beginning a Master’s degree at <span>Georgia Tech</span>, where I plan to specialize in computing systems alongside continued full-time industry work.</p>
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

                    {error ? (
                        <div className="home-projects-error">
                            <p>{error}</p>
                        </div>
                    ) : ( <div className="projects">
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
                    <div className="info-card">
                        <div className="wip-indicator"></div>
                        <FiMapPin size={32} aria-hidden="true" className="info-icon" />
                        <span className="info-label">Location</span>
                        <span className="info-title">United States</span>
                    </div>

                    <div className="info-card">
                        <div className="wip-indicator"></div>
                        <FiSunrise size={32} aria-hidden="true" className="info-icon" />
                        <span className="info-label">Status</span>
                        <span className="info-title">Early Bird</span>
                    </div>

                    <div className="info-card">
                        <div className="wip-indicator"></div>
                        <FiClock size={32} aria-hidden="true" className="info-icon" />
                        <span className="info-label">Response Time</span>
                        <span className="info-title">Within 24h</span>
                    </div>

                    <div className="info-card">
                        <div className="wip-indicator"></div>
                        <FiHeart size={32} aria-hidden="true" className="info-icon" />
                        <span className="info-label">Created with</span>
                        <span className="info-title">React and ❤️</span>
                    </div>

                    <div className="info-card">
                        <div className="wip-indicator"></div>
                        <span className="info-label">Theme Selector</span>
                        <span className="info-title">Coming Soon</span>
                    </div>
                </section>
            </main>
        </div>
    )
}