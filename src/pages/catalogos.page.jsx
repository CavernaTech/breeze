import { useNavigate } from "react-router-dom";

import ListingComponent from "../components/listing";
import PageComponent from "../components/page.component";
import MenuContainer from "../containers/menu.container";

function CatalogosPage({ items, fields }) {
  const navigate = useNavigate();

  const handleAdd = () => navigate("/catalogos/+");
  const handleEdit = (codigo) => navigate("/catalogos/" + codigo);

  return (
    <MenuContainer>
      <PageComponent title="Categorias">
        <ListingComponent
          onClickAdd={handleAdd}
          onClickEdit={handleEdit}
          items={items}
          fields={fields}
        />
      </PageComponent>
    </MenuContainer>
  );
}

export default CatalogosPage;
