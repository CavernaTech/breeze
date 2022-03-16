import React from "react";
import { useNavigate } from "react-router-dom";
import ListingComponent from "../components/listing";
import PageComponent from "../components/page.component";
import MenuContainer from "../containers/menu.container";

function ProdutosPage({ fields, items }) {
  const navigate = useNavigate();

  const handleOnClickAdd = () => navigate("/produtos/+");

  return (
    <React.Fragment>
      <MenuContainer>
        <PageComponent title="Produtos">
          <ListingComponent
            fields={fields}
            items={items}
            onClickAdd={handleOnClickAdd}
            onClickEdit={() => {}}
          />
        </PageComponent>
      </MenuContainer>
    </React.Fragment>
  );
}

export default ProdutosPage;
