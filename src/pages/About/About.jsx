import "./About.css"
import ProfileCard from "../../components/ProfileCard/ProfileCard"

export default function About() {
    return (
        <div className="about-container">
            <aside className="about-profile">
                <ProfileCard />
            </aside>

            <main className="about-content">
                <section className="about-section">
                    <h1>About Me</h1>
                    <p>Content coming soon...</p>
                </section>
            </main>
        </div>
    )
}
