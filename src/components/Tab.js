import React from 'react';

export const Tab = (props) => {

  const { value, label, handleClick } = props;

  return (
    <button
      type="button"
      key={value}
      id={value}
      className='tabs__btns-btn'
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
