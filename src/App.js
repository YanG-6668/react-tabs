import React, { useState } from 'react';
import Buttons from './components/Buttons';
import Items from './components/Items';
import './App.scss';
import tabsData from './tabsData.json';

function App() {
  const [value, setValue] = useState(0);

  return (
    <>
      <div className="tabs">
       <Buttons tabsData={tabsData} value={value} setValue={setValue} />
       <Items tabsData={tabsData} value={value} />
      </div>
    </>
  );
}

export default App;
