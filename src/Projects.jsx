import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

class Projects extends Component {
  state = { projects: [] };

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div id={'project-' + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div id="projects_image" className="column">
          <img className="svg_image" src="./src/images/drawkit-support-man-colour.svg"></img>
          </div>
          <div id="projects_text" className="column">
            <h1 className="ui header" id="projects-header">My Projects</h1>
            <p>
              Here are the projects that I have done, and plan on doing. Most is from CraftAcademy bootcamp with few exceptions.
            </p>
          </div>
        </div>
        <div id="project_list" className="ui stackable three column grid">{projectsList}</div>
      </div>
    );
  }

  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }

}

export default Projects;