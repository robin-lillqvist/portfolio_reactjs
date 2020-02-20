import React from "react";


const JobCard = ({ employment }) => {
  return (
    <>
    <br/>
        <div className="jobheader">{employment.position} at {employment.companyname}</div>
        <div className="jobperiod">{employment.start}  -  {employment.end}</div>
        <div className="jobdescription">{employment.description}</div>
    </>
  );
};

export default JobCard;