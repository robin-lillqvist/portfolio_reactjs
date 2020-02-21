import React from "react";

const JobCard = ({ employment }) => {
  return (
    <>
    <br/>
    <div id="JobCard" className="ui raised very padded text container segment">
        <div class="ui top right attached label">{employment.start} - {employment.end}</div>
        <h2 class="ui header">{employment.position} at {employment.companyname}</h2>
        <p>{employment.description}</p>
    </div>
    </>
  );
};

export default JobCard;