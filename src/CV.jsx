import React, { Component } from "react";
import JobCard from "./JobCard";
import axios from "axios";
import ColoredLine from './SiteComponents'

class CV extends Component {
  state = { employments: [] };

  render() {
    const employments = this.state.employments;
    let employmentList;
    
    if (employments.length > 0) {
      employmentList = employments.map(employment => {
        return (
          <div id={'employment-' + employment.id} key={employment.id}>
            <JobCard employment={employment} />
            {/* <ColoredLine /> */}
          </div>
        );
      });
    }

    return (
    <div id="CV_height" className="ui main container">
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
  }

}

export default CV;