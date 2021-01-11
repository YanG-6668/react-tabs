import React, { useState } from 'react';
import { Tabs } from './Tabs';
// import AccessTimeIcon from '@material-ui/icons/AccessTime';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

const options = [
  { value: 1, label: 'Item 1' },
  { value: 2, label: 'Item 2' },
  { value: 3, label: 'Item 3' },
];

export default function App() {
  const [value, setValue] = useState(
    { value: 1, label: 'Item 1' }
  );

  const handleOnChange = (option) => {
    setValue({ 
      value: Number(option.target.value), 
      label: option.target.innerHTML 
    });
  }

  console.log(value);

  return (
    <div className="tabs">
      <Tabs
        options={options}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );

  // const [position, setPosition] = useState(0);
  // const [check, setCheck] = useState('text');

  // const positionBorder = (e) => {
  //   const value = e.target.dataset.key - 1;
  //   setPosition(value);
  // };

  // const handleChange = (e) => {
  //   const value = e.target.id;
  //   setCheck(value);
  // }

  // return (
  //   <>
  //     <div className="tabs">

  //       <h1 className="tabs__title">React Tabs</h1>

  //       <div className="tabs__btns">

  //         {data.map(item => {
  //           return (
  //             <button
  //               key={item.value}
  //               className={`tabs__btns-btn${check === 'topIcon' ? ' icon-column' : ''}`}
  //               onClick={positionBorder}
  //               data-key={item.value}
  //             >{check === 'text' ? '' : item.icon}{check === 'onlyIcon' ? '' : item.label}</button>
  //           );
  //         })}
  //         <div className="is-active" style={{ left: `${(position) * 150}px` }}></div>
  //       </div>

  //     </div>

  //     <div className="side-menu">
  //       <h2 className="side-menu__title">Customization</h2>

  //       <form className="form" onChange={handleChange}>
  //         {dataBtn.map(item => {
  //           return (
  //             <label 
  //               key={item.value} 
  //               className="form__label"
  //               htmlFor={item.value}>
  //               <input
  //                 className="form__label-input"
  //                 type="radio"
  //                 id={item.value}
  //                 checked={item.checked}
  //               />
  //               {item.label}
  //             </label>
  //           );
  //         })}
  //       </form>
  //     </div>
  //   </>
  // );
}
