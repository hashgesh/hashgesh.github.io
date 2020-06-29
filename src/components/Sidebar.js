import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  const sidebarItems = [
    {
      label: 'About me',
      url: '/about',
    },
    {
      label: 'Resume',
      url: '/resume',
    },
    {
      label: 'Town',
      url: '/town',
    },
    {
      label: 'ISS',
      url: '/iss',
    },
  ];
  return (
    <div className='mSidebar'>
      <div className='mPhotoContainer'>
        <img className='mProfilePhoto' src='../static/arif.jpg'></img>
      </div>

      <div className='mSidebarItemContainer'>
        {sidebarItems.map((item) => {
          return (
            <Link to={item.url} key={item.label}>
              <div className='mSidebarItem'>{item.label}</div>
            </Link>
          );
        })}
        <div className='mSidebarItem'></div>
      </div>
    </div>
  );
};