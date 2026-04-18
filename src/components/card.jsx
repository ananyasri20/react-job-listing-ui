import React from 'react'

const Card=({job}) => {
  return (
    <div className="card">
      <img src={job.brandLogo} alt={job.companyName} width="60" />
      <h2>{job.companyName}</h2>
      <p>{job.post}</p>
      <p>{job.tag1},{job.tag2}</p>
      <p>{job.pay}</p>
      <p>{job.location}</p>
      <small>{job.datePosted}</small>
      <button>Apply Now</button>
    </div>
  );
};
export default Card
