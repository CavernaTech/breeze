import React from 'react';
import MenuComponent from '../components/menu/index';
import PageComponent from '../components/page.component';

function CardapiosPage() {
  return (
    <React.Fragment>
      <MenuComponent>
        <PageComponent title="Cardápios" icon="📖" />
      </MenuComponent>
    </React.Fragment>
  );
};

export default CardapiosPage;
