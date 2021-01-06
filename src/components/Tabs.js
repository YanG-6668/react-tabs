import React from 'react';
import { Tab } from './Tab';

export const Tabs = (props) => {

  const { data } = props;

  return (
    <>
      <div className="tabs__btns">
        {data.map(item => {
          return (
            <Tab value={item.value} label={item.label} />
          );
        })}
        {/* <span className="is-active" style={{left: `${value*150}px`}}></span> */}
      </div>
    </>
  );
};
