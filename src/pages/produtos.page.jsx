import React from "react";
import { useNavigate } from "react-router-dom";
import ListingComponent from "../components/listing";
import PageComponent from "../components/page.component";
import MenuContainer from "../containers/menu.container";

function ProdutosPage({ fields, items }) {
  const navigate = useNavigate();

  const handleAdd = () => navigate("/produtos/+");
  const handleEdit = (codigo) => navigate("/produtos/" + codigo);

  return (
    <React.Fragment>
      <MenuContainer>
        <PageComponent title="Produtos">
          <ListingComponent
            fields={fields}
            items={items}
            onClickAdd={handleAdd}
            onClickEdit={handleEdit}
          />
        </PageComponent>
      </MenuContainer>
    </React.Fragment>
  );
}

export default ProdutosPage;
