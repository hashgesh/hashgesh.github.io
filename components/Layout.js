import { Component } from 'react';

const Layout = (props) => {
  return <div className='appLayout'>{props.children}</div>;
};

export default Layout;