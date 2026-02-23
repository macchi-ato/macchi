import "./About.css"
import ProfileCard from "../../components/ProfileCard/ProfileCard"

export default function About() {
    return (
        <div className="about-container">
            <aside className="about-profile">
                <ProfileCard 
                    disableHover={true}
                />
            </aside>

            <main className="about-content">
                <div className="about-header">
                    <h1>Martin Vidal Garibay</h1>
                    <span title="last updated">February 23, 2026</span>
                </div>

                <p>I'm a recent Software Engineering graduate with a focus on full-stack development.</p>
                <p>Right now, my main focus is landing a software engineering role. I'm open to full-stack, frontend, or backend positions. Outside of the job search, most of my time is spent building projects, strengthening fundamentals, and learning more about how things work under the hood.</p>
                <p>This fall, I'll be continuing my education at Georgia Tech to deepen my understanding of computing systems, while keeping my primary focus on full-time industry work.</p>
                <p>Besides programming, I like playing pickleball, video games, going on walks with my dog, and sometimes creating art with ink or 3D in Blender.</p>
                <p>Thanks for stopping by — feel free to reach out :)</p>
                <p>P.S. I'm not a dog! I just decided to use a picture of my dog "Jinkay" until I get a professional picture taken to use.</p>
            </main>
        </div>
    )
}
