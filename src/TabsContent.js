import React from 'react';
import TabsItem from './TabsItem';

const TabsContent = ({ tabsData, value }) => {
  return (

    <div className="tabs__content">
      <TabsItem tabsData={tabsData} value={value} />
    </div>

  );
}

export default TabsContent;
