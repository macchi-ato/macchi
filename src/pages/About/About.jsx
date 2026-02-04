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
                    <span title="last updated">January 22, 2026</span>
                </div>

                <p>My name is Martin Vidal Garibay and I’m a recent Software Engineering graduate with a focus on full-stack development.</p>
                <p>Right now, my main focus is landing a full-time software engineering role while continuing to grow as a developer. I’m open to different areas of software, but I’ve been slowly leaning more toward backend and systems-focused work. Most of my time is spent building projects, strengthening fundamentals, and learning more about how software behaves at a lower level. Alongside this, I’m continuing my education at Georgia Tech this fall, where I plan to deepen my understanding of computing systems while keeping my primary focus on industry work.</p>
                <p>Besides programming, I like doing things like playing pickleball, video games, going on walks with my dog, and sometimes creating art with ink or 3D in blender.</p>
                <p>Thanks for stopping by — feel free to reach out :)</p>
            </main>
        </div>
    )
}
