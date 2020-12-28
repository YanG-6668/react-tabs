import React from 'react';

const TabsBtn = ({tabsData, value, setValue}) => {
  return (
    <>
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
    </>
  );

}

export default TabsBtn;
