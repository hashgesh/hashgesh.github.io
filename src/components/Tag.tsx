import React, { useState } from 'react';

export default (props) => {
  const { text, count } = props;
  return (
    <div className='tagContainer'>
      <span className='tagText'>{text}</span>
      {count && <span className='tagCount'>{count}</span>}
    </div>
  );
};
