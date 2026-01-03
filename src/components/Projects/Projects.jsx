import Project from "./Project/Project.jsx"
import "./Projects.css"
export default function Projects() {
    return (
        <div className="containers projects-page back-cont" id="projects">
            <span className="title">Наши проекты</span>
            <div className="projects">

                <Project />

            </div>
        </div>
    )
}