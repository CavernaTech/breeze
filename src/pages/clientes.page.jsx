import { useNavigate } from "react-router-dom";

import ListingComponent from "../components/listing";
import PageComponent from "../components/page.component";
import MenuContainer from "../containers/menu.container";

function ClientesPage({ items, fields }) {
  const navigate = useNavigate();

  const handleAdd = () => navigate("/clientes/+");
  const handleEdit = (codigo) => navigate("/clientes/" + codigo);

  return (
    <MenuContainer>
      <PageComponent title="Clientes">
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

export default ClientesPage;
