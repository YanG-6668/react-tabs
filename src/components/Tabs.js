import React from 'react';
import { Tab } from './Tab';

export const Tabs = ({ data, value,  onChange }) => {

  const elements = data.map((item, index) => {
    const { id, title } = item;
    return (
      <button
        type="button"
        key={id}
        className='tabs__btns-btn'
        onClick={() => onChange(index)}>
        <Tab title={title} />
      </button>
    );
  });

  return (
    <>
      <div className="tabs__btns">
        {elements}
        <div className="is-active" style={{left: `${value*150}px`}}></div>
      </div>
    </>
  );
};
