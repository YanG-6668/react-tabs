import React, { useState } from 'react';

const TabsItem = ({ tabsData, value }) => {
  return (
    <>
      {tabsData.map((item, index) => {
        return (
          <div key={item.id} className={`tabs__item ${index === value && 'is-active'}`}>
            {item.text}
          </div>
        );
      })}
    </>
  );
}

export default TabsItem;
