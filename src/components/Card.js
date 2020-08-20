import React, { useState } from 'react';

export default (props) => {
  const {
    companyName,
    jobTitle,
    avatarImage,
    duration,
    techStack,
    description,
    companyUrl,
    location,
  } = props;
  return (
    <div className='cardContainer'>
      {/* <img src={avatarImage} alt='Avatar' style='width:100%'></img> */}
      <div className='cardHeader'>
        <b>
          {jobTitle} - {companyName}
          <span className='workLocation'>{location}</span>
          <div className='workDuration'>{duration}</div>
        </b>
      </div>
      <div className='cardtext'>
        {techStack && (
          <p>
            <b>Tech Stack</b>
            <br />
            {techStack}
          </p>
        )}
        <p>
          <b>Description</b>

          <ul>
            {description.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </p>
        <a href={companyUrl} target='_blank'>
          {companyUrl}
        </a>
      </div>
    </div>
  );
};
