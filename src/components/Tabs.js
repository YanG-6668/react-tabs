import React, { useState } from 'react';
import { Tab } from './Tab';

export const Tabs = (props) => {
  const { options, onChange, value } = props;

  const [elementPosition, setElementPosition] = useState({
    elementLeft: 0,
    elementWidth: 450 / options.length,
  });
  const handleOnClick = (e, option) => {
    const elementWidth = e.target.offsetWidth;
    const elementLeft = e.target.offsetLeft;
    setElementPosition({
      elementLeft: elementLeft,
      elementWidth: elementWidth,
    });
    onChange(option);
  }
  return (
    <div className="tabs__btns">
      {options.map(item => {
        return (
          <Tab
            option={item}
            key={item.value}
            label={item.label}
            icon={item.icon}
            iconTop={item.iconTop}
            handleOnClick={handleOnClick}
          />
        );
      })}
      <span className="is-active" style={{
        left: `${elementPosition.elementLeft}px`,
        width: `${elementPosition.elementWidth}px`
      }}></span>
    </div>
  );
};
