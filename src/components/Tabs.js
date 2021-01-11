import React, { useState } from 'react';
import { Tab } from './Tab';

export const Tabs = (props) => {
  const { options, onChange } = props;

  const [elementPosition, setElementPosition] = useState({
    elementLeft: 0,
    elementWidth: 450 / options.length,
  });
  const handleOnClick = (e) => {
    const elementWidth = e.target.offsetWidth;
    const elementLeft = e.target.offsetLeft;
    setElementPosition({
      elementLeft: elementLeft,
      elementWidth: elementWidth,
    });
  }
  return (
    <div className="tabs__btns" onClick={onChange}>
      {options.map(item => {
        return (
          <Tab
            value={item.value}
            key={item.value}
            label={item.label}
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
