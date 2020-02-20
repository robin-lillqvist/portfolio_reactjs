import React, { Component } from "react";
import JobCard from "./JobCard";
import axios from "axios";

class CV extends Component {
  state = { jobs: [] };

  render() {
    const jobs = this.state.jobs;
    let jobsList;

    if (jobs.length > 0) {
      jobsList = jobs.map(job => {
        return (
          <div id={'job-' + job.id} key={job.id}>
            <JobCard job={job} />
          </div>
        );
      });
    }
    
    return (
    <div className="ui main container">
        <div className="ui">
          <img className="svg_image" src="./src/images/drawkit-content-man-colour.svg"></img>
          <h1 className="ui header" id="about-header">Curriculum Vitae</h1>
          <div className="ui grid">
            <div className="four wide column" style={{ 
                backgroundColor: "lightblue"
            }}><p>Test</p>
            </div>
            <div className="six wide column" style={{ 
                backgroundColor: "lightblue"
            }}><p>Test</p>
            </div>
            <div className="six wide column" style={{ 
                backgroundColor: "lightblue"
            }}><p>Test</p>
            </div>
            <div className="four wide column" style={{ 
                backgroundColor: "lightblue"
            }}><p>Test</p></div>
            <div className="twelve wide column" style={{ 
                backgroundColor: "teal"
            }}><p>Test</p></div>
        </div>
        </div>
        <div id="job_list" className="ui stackable three column grid">{jobsList}</div>
    </div>
  );
}

  componentDidMount() {
    axios.get('./src/data/jobs.json')
      .then(response => {
        this.setState({
          jobs: response.data
        })
      })
  }
  
}

export default CV;