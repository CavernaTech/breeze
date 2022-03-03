import React from 'react';
import MenuComponent from '../components/menu/index';
import PageComponent from '../components/page.component';

function DashboardPage() {
  return (
    <React.Fragment>
      <MenuComponent>
        <PageComponent title="Dashboard" icon="📊" />
      </MenuComponent>
    </React.Fragment>
  );
};

export default DashboardPage;
