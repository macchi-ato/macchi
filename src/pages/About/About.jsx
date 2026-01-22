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

                <p>I’m a recent Software Engineering graduate with a focus on full-stack development and a growing curiosity for how things work under the hood.</p>
                <p>Right now, my main focus is landing a full-time software engineering role while continuing to grow as a developer. I’m open to different areas of software, but I’ve been slowly leaning more toward backend and systems-focused work. Most of my time is spent building projects, strengthening fundamentals, and learning more about how software behaves at a lower level. Alongside this, I’m continuing my education through Georgia Tech’s OMSCS program starting in Fall 2026, where I plan to deepen my understanding of computing systems while keeping my primary focus on industry work.</p>
                <p>Besides software, I like doing things like playing pickleball, going on walks with my dog, and sometimes doing 3D modeling in Blender. Some of my guilty pleasures are (unfortunately) playing League of Legends or watching K-dramas.</p>
                <p>Thanks for stopping by — feel free to reach out :)</p>
            </main>
        </div>
    )
}
