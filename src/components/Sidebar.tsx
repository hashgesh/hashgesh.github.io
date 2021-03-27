import React from 'react';
import { Link } from 'react-router-dom';

export  default (props) => {
  const sidebarItems = [
    //{
    //  label: 'About me',
    //  url: '/about',
    //},
    {
      label: 'Experience',
      url: '/experience',
    },
    {
      label: 'Education',
      url: '/education',
    },
    //{
    //  label: 'ISS',
    //  url: '/iss',
    //},
  ];

  return (
    <div className='mSidebar'>
      <div className='mPhotoContainer'>
        <Link to={{pathname: `/`, query: {}}}>
          <img className='mProfilePhoto' src='../static/arif.jpg'></img>
        </Link>
      </div>
      <div className='mNameContainer'>
        <Link to={{pathname: `/`, query: {}}}>Arif Kürsad Kavas </Link>
      </div>

      <div className='mSidebarItemContainer'>
        {sidebarItems.map((item) => {
          return (
            <Link to={{pathname: `${item.url}`, query: {}}} key={item.label}>
              <div className='mSidebarItem'>{item.label}</div>
            </Link>
          );
        })}
        <div className='mSidebarItem'></div>
      </div>
      <div className='mSidebarBottom'>
        <a href='mailTo:arifkavas@gmail.com'>Contact</a>
      </div>
    </div>
  );
};