import React, { Component } from "react";
import JobCard from "./JobCard";
import SkillCard from "./SkillCard";
import axios from "axios";
import ColoredLine from './SiteComponents'

class CV extends Component {
  state = { employments: [], skills: [] };

  render() {
    const employments = this.state.employments;
    const skills = this.state.skills;
    let employmentList;
    let SkillsList;
    
    // if (employments.length > 0) {
      employmentList = employments.map(employment => {
        return (
          <div id={'employment-' + employment.id} key={employment.id}>
            <JobCard employment={employment} />
            {/* <ColoredLine /> */}
          </div>
        );
      });
    // }
    // if (employments.length > 0) {
      SkillsList = skills.map(skill => {
        return (
          <div id={'skill-' + skill.id} key={skill.id}>
            <SkillCard skill={skill} />
            {/* <ColoredLine /> */}
          </div>
        );
      });
    // }

    return (
    <div className="ui main container">
          <h1 className="ui header" id="about-header">Curriculum Vitae</h1>
          <img className="svg_image" src="./src/images/drawkit-folder-man-colour.svg"/>
          <div id="employment_list">{employmentList}</div>
    </div>
  );
}

  componentDidMount() {
    axios.get('./src/data/jobs.json')
      .then(response => {
        this.setState({
          employments: response.data
        })
      })
    axios.get('./src/data/skills.json')
      .then(response => {
        this.setState({
          skills: response.data
        })
      })
  }

}

export default CV;