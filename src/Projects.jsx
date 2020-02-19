import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
// import { UndrawCoding } from "react-undraw-illustrations";

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
            {/* <UndrawCoding primaryColor='#008080' height='200px' /> */}
          </div>
          <div id="projects_text" className="column">
            <h1 className="ui header" id="projects-header">My Projects</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quod
              ab doloremque eaque. Consequatur temporibus, quos enim, eaque nemo ad
              iusto sequi modi totam qui veniam? Ab asperiores inventore distinctio.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quod
              ab doloremque eaque. Consequatur temporibus, quos enim, eaque nemo ad
              iusto sequi modi totam qui veniam? Ab asperiores inventore distinctio.
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