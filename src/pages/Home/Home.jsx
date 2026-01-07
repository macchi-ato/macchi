import './Home.css'

export default function Home() {
    return (
        <div className="home-container">
            <aside className="home-profile">
                Profile
            </aside>

            <main className="home-content">
                <section className="home-intro">
                    <div className="intro-container">
                        <h1>Hello! I'm <span id="intro-name">Name</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis accusantium consectetur veniam, at mollitia repellat placeat reiciendis corrupti, odit itaque voluptate, facere esse minima sequi cum ab ut nulla fugiat.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error temporibus atque deleniti ad illo ea, quibusdam suscipit dolor, sequi nisi autem et quidem, facere impedit. Nesciunt reprehenderit impedit nostrum.
                        </p>
                    </div>
                    <span>More {`->`}</span>
                </section>

                <h2 id="projects-header">Recent Projects</h2>
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