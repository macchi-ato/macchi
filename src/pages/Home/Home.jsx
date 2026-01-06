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
                    <div>Project 1</div>
                    <div>Project 2</div>
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