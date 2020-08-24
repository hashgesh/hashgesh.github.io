import React from 'react';
import Link from 'next/link';

const Sidebar = (props) => {
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
        <Link href='/'>
          <img className='mProfilePhoto' src='/arif.jpg'></img>
        </Link>
      </div>

      <div className='mSidebarItemContainer'>
        {sidebarItems.map((item) => {
          return (
            <Link href={item.url} key={item.label}>
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

export default Sidebar;
