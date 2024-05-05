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
      <div className="badge">⏳ Posted Recently</div>
      <div className="card-header">
        <img src={logoUrl} alt="logo" className="logo" />
        <div className="header-details">
          <div className="company-name" >{companyName}</div>
          <div className="role">{jobRole}</div>
          <div>{location}</div>
        </div>
      </div>
      <div className="card-body">
        <p className="salary">Estimated Salary: ${data.minJdSalary || 'N/A'} - ${data.maxJdSalary} USD <span>✅</span></p>
        <div className="about">
          <p className="about-company">About Company:</p>
          <p className="role-overview">{slicedRoleOverview}</p>
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
      <button className="referral-button" onClick={() => {}}>Unlock Referral Asks</button>
    </div>
  );
};

export default Card;