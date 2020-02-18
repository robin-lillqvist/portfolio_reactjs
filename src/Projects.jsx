import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import axios from "axios";
import { UndrawDashboard, UndrawBuildingBlocks, UndrawBitcoin, UndrawChecklist } from "react-undraw-illustrations";
import UndrawAtWork from "react-undraw-illustrations/lib/components/UndrawAtWork/UndrawAtWork";
import UndrawADayAtThePark from "react-undraw-illustrations/lib/components/UndrawADayAtThePark/UndrawADayAtThePark";
import UndrawWorkTime from "react-undraw-illustrations/lib/components/UndrawWorkTime/UndrawWorkTime";
import UndrawProgramming from "react-undraw-illustrations/lib/components/UndrawProgramming/UndrawProgramming";



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
          <div className="column">
            <UndrawProgramming primaryColor='#12283a' height='200px' />
          </div>
          <div className="column">
            <h1 className="ui header" id="projects-header">My Projects</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia quod
              ab doloremque eaque. Consequatur temporibus, quos enim, eaque nemo ad
              iusto sequi modi totam qui veniam? Ab asperiores inventore distinctio.
            </p>
          </div>
        </div>
        <div className="ui stackable four column grid">{projectsList}</div>
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