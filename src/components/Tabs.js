import React from 'react';
import { Tab } from './Tab';

export const Tabs = (props) => {

  const { options, value, handleClick } = props;

  return (
    <>
      <div className="tabs__btns">
        {options.map(item => {
          return (
            <Tab 
              value={item.value} 
              label={item.label}
              handleClick={handleClick} 
            />
          );
        })}
        <span className="is-active" style={{ left: `${(value.value - 1) * 150}px` }}></span>
      </div>
    </>
  );
};
