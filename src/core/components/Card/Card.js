import React from "react";
import "./Card.css";

const Card = ({ data }) => {

  const { companyName, logoUrl, jobRole, location, minSalary, maxSalary, aboutCompany, recruiterName, recruiterProfileLink, roleOverview, jdLink, minExp } = data;
  const slicedRoleOverview = data?.jobDetailsFromCompany?.slice(0, 300);

  const easyApplyJob = () => {
    const jobId = data.jdUid;
    //execute job Easy Apply Logic    
  }
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={logoUrl} alt="logo" className="logo" />
        <div className="header-details">
          <h4 >{companyName}</h4>
          <h2>{jobRole}</h2>
          <p>{location}</p>
        </div>
      </div>
      <div className="card-body">
        <p className="salary">Estimated Salary: ${data.minJdSalary || 'N/A'} - ${data.maxJdSalary} USD <span>✅</span></p>
        <div className="about">
          <p><strong>About Company:</strong></p>
          <p>{slicedRoleOverview}</p>
          <p><a href={recruiterProfileLink}>{recruiterName}</a></p>
        </div>
        <div className="apply-link">
          <a href={jdLink}>View job</a>
        </div>
        <div className="exp-info">
          <h3>Minimum Experience</h3>
          <h2>{minExp} years</h2>
        </div>
      </div>
      <button className="apply-button" onClick={easyApplyJob}>⚡ Easy Apply</button>
    </div>
  );
};

export default Card;