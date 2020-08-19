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
  } = props;
  return (
    <div className='cardContainer'>
      {/* <img src={avatarImage} alt='Avatar' style='width:100%'></img> */}
      <div className='cardtext'>
        <h4>
          <b>{jobTitle}</b>
        </h4>
        <p>{companyName}</p>
        <p>{duration}</p>
        <p>{techStack}</p>
        <ul>
          {description.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <a href={companyUrl} target='_blank'>
          {companyUrl}
        </a>
      </div>
    </div>
  );
};
