import './Project.css'
import projectImg from '../../assets/theChip.jpg'

export default function Project({ title }) {
    return (
        <div className="project-card">
            <img src={projectImg} alt="Project" id="project-img" />

            <div className="project-description">
                <h3 id="project-title">{title}</h3>
                <p id="project-about">This is a just a testing description.</p>
            </div>
        </div>
    )
}