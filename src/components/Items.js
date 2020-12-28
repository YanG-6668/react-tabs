import React from 'react';

const Items = (props) => {
  return (
    <div className="tabs__content">
      {props.tabsData.map((item, index) => {
        return (
          <div key={item.id} className={`tabs__item ${index === props.value && 'is-active'}`}>
            {item.text}
          </div>
        );
      })}
    </div>
  );
}

export default Items;
