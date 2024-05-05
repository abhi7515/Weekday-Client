import React from "react";
import "./Card.css";

const Card = ({ data }) => {
    const hasEasyApply = data.jobDetailsFromCompany.toLowerCase().includes("easy apply");
  return (
    <div className="card">
      <img src={data.logoUrl} alt={data.companyName} className="logo" />
      <div className="details">
        <h2>{data.companyName}</h2>
        <p>Job Role: {data.jobRole}</p>
        <p>Location: {data.location}</p>
        <p>Experience: {data.minExp} - {data.maxExp} years</p>
        <p>Salary: ${data.minJdSalary || 'N/A'} - ${data.maxJdSalary}</p>
        <a href={data.jdLink} target="_blank" rel="noopener noreferrer">Job Link</a>
        <p>{data.jobDetailsFromCompany}</p>
      </div>
      {hasEasyApply && <button className="button">Easy Apply</button>}
    </div>
  );
};

export default Card;