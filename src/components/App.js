import React, { useState } from 'react';
import { Tabs } from './Tabs';

export default function App() {
  const [value, setValue] = useState(0);

  const data = [
    {
      id: 1,
      title: 'Item 1',
      content: 'Content 1'
    },
    {
      id: 2,
      title: 'Item 2',
      content: 'Content 2'
    },
    {
      id: 3,
      title: 'Item 3',
      content: 'Content 3'
    },
  ];

  const onChange = (newValue) => {
    setValue(newValue);
  }
  console.log(value);
  return (
    <div className="tabs">
      <h1>React Tabs</h1>

      <Tabs data={data} value={value} onChange={onChange} />
    </div>
  );
}
