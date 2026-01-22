import "./About.css"
import ProfileCard from "../../components/ProfileCard/ProfileCard"

export default function About() {
    return (
        <div className="about-container">
            <aside className="about-profile">
                <ProfileCard />
            </aside>

            <main className="about-content">
                <div className="about-header">
                    <h1>About Me</h1>
                    <span>January 22, 2026</span>
                </div>

                <p>Coming soon...</p>
            </main>
        </div>
    )
}
