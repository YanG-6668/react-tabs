import React from 'react';

export const Tab = (props) => {

  const { label, icon, iconTop, option, handleOnClick } = props;

  return (
    <button
      type="button"
      onClick={(e) => handleOnClick(e, option)}
      className={`tabs__btns-btn ${iconTop ? 'icon-column' : ''}`}
    >
    {icon} {label}
    </button>
  );
}
