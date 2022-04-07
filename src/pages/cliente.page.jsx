import { useNavigate, useParams } from "react-router-dom";
import MenuContainer from "../containers/menu.container";
import ClienteFormContainer from "../containers/clienteForm.container";

function ClientePage() {
  const params = useParams();
  const navigate = useNavigate();
  const handleSubmit = () => navigate("/clientes");
  return (
    <MenuContainer>
      <ClienteFormContainer codigo={params.codigo} onSubmit={handleSubmit} />
    </MenuContainer>
  );
}

export default ClientePage;
