import React from 'react';

const Buttons = (props) => {
  return (
    <div className="tabs__btns">
      {props.tabsData.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => {
              props.setValue(index);
            }}
            className={`tabs__btns-btn ${index === props.value && 'is-active'}`}>
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default Buttons;
