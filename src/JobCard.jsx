import React from "react";

const JobCard = ({ CV }) => {
  return (
    <><br/>
      <div className="ui card">
        {/* <div className="image">
          <img src={project.image} />
        </div> */}
        <div className="content">
          <h3 className="ui header">{job.position}</h3>
          <div className="companyName">{job.companyname}</div>
          <div className="job_dates">{job.start}</div>
          <div className="job_dates">{job.end}</div>
          <div className="description">{job.description}</div>
        </div>
      </div>
    </>
  );
};

export default JobCard;