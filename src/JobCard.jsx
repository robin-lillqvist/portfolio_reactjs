import React from "react";


const JobCard = ({ employment }) => {
  return (
    <>
    <br/>
        <div className="job_header">{employment.position} at {employment.companyname}</div>
        <div className="job_period">{employment.start}  -  {employment.end}</div>
        <div className="job_bread">{employment.description}</div>
    </>
  );
};

export default JobCard;