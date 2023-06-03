import './projects.css';
import { projectData } from "../../assets/projectsData";
import ProjectBox from '../../components/projectBox/ProjectBox';

const Projects = () => {
  return (
    <div className="projectPage">
      <h1 className="projectHeading gradient__text">PROJECTS</h1>
      <div className="projects">
        {projectData &&
          projectData.map((project, idx) => (
            <ProjectBox key={idx} project={project} />
          ))}
      </div>
    </div>
  );
}

export default Projects