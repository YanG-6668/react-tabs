import React from 'react';

export const Tab = (props) => {

  const { label, value , handleOnClick } = props;

  return (
    <button
      type="button"
      value={value}
      onClick={handleOnClick}
      className='tabs__btns-btn'
    >
      {label}
    </button>
  );
}
