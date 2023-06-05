import "./projectBox.css";
import { GoLinkExternal } from "react-icons/go";

const ProjectBox = ({ project }) => {
  return (
    <div className="projectBox">
      <div className="pbImgContainer">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="pbInfoContainer">
        <h2>{project.name}</h2>
        <h4>{project.desc}</h4>
        <h4>
          Date Created: <span>{project.date}</span>
        </h4>
        <a href={project.url} target="__blank">
          View Demo <GoLinkExternal />
        </a>
      </div>
      <div className="linee"></div>
    </div>
  );
};

export default ProjectBox;
