import React from 'react';
import MenuComponent from '../components/menu/index';
import PageComponent from '../components/page.component';

function ProdutosPage() {
  return (
    <React.Fragment>
      <MenuComponent>
        <PageComponent title="Produtos" icon="☕" />
      </MenuComponent>
    </React.Fragment>
  );
};

export default ProdutosPage;
