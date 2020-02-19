import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <><br/>
      <div className="ui card">
        <div className="image">
          <img src={project.image} />
        </div>
        <div className="content">
          <h3 className="ui header">{project.name}</h3>
          <div className="description">{project.description}</div>
          <div className="tech">Using {project.tech}</div><div className="link"><a href={project.link}>Link to project</a></div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;