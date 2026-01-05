import './Home.css'

export default function Home() {
    return (
        <div className="home-container">
            <aside className="home-profile">
                Profile
            </aside>

            <main className="home-content">
                <section id="intro-paragraph">Intro Paragraph</section>

                <section className="home-projects">
                    <div id="project-1">Project 1</div>
                    <div id="project-2">Project 2</div>
                </section>

                <section className="home-extra">
                    <span id="extra-1">Content</span>
                    <span id="extra-2">Content</span>
                    <span id="extra-3">Content</span>
                </section>
            </main>
        </div>
    )
}