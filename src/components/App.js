import React, { useState } from 'react';
import { Tabs } from './Tabs';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';

const options = [
  { value: 1, label: 'Item 1' },
  { value: 2, label: 'Item 2' },
  { value: 3, label: 'Item 3' },
  { value: 4, label: 'Item 4' },
  { value: 5, label: 'Item 5' },
];

const options1 = [
  { value: 1, label: 'Item 1', icon: <AccessTimeIcon /> },
  { value: 2, label: 'Item 2', icon: <FavoriteIcon /> },
  { value: 3, label: 'Item 3', icon: <AirplanemodeActiveIcon /> },
];

const options2 = [
  { value: 1, label: 'Item 1', icon: <AccessTimeIcon />, iconTop: true },
  { value: 2, label: 'Item 2', icon: <FavoriteIcon />, iconTop: true },
  { value: 3, label: 'Item 3', icon: <AirplanemodeActiveIcon />, iconTop: true },
  { value: 4, label: 'Item 4', icon: <FavoriteIcon />, iconTop: true },
];

const options3 = [
  { value: 1, icon: <AccessTimeIcon /> },
  { value: 2, icon: <FavoriteIcon /> },
  { value: 3, icon: <AirplanemodeActiveIcon /> },
]

export default function App() {
  const [value, setValue] = useState(
    { value: 1, label: 'Item 1' }
  );

  const handleOnChange = (option) => {
    setValue(option);
  }
  console.log(value);

  return (
    <div className="tabs">
      <Tabs
        options={options}
        value={value}
        onChange={handleOnChange}
      />
      <Tabs
        options={options1}
        value={value}
        onChange={handleOnChange}
      />
      <Tabs
        options={options2}
        value={value}
        onChange={handleOnChange}
      />
      <Tabs
        options={options3}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}
