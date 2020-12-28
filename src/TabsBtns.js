import React from 'react';
import TabsBtn from './TabsBtn';

const TabsBtns = ({ tabsData, value, setValue }) => {
  // console.log(name, text);
  return (
    <div className="tabs__btns">
    {
        tabsData.map((item, index) => {
          return (
            <button
              key={item.id}
              onClick={() => {
                setValue(index);
              }}
              className={`tabs__btns-btn ${index === value && 'is-active'}`}>
              {item.name}
            </button>
          );
        })
      }
  </div>

  );
}

export default TabsBtns;
