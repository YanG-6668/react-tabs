import React from 'react';

export const Tab = ({ value, label }) => {

  return (
    <button
      type="button"
      key={value}
      className='tabs__btns-btn'
    >
      {label}
    </button>
  );
}
