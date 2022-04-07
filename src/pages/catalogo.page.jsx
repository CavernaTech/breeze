import { useNavigate, useParams } from "react-router-dom";
import MenuContainer from "../containers/menu.container";
import CatalogoFormContainer from "../containers/catalogoForm.container";

function CatalogoPage() {
  const params = useParams();
  const navigate = useNavigate();
  const handleSubmit = () => navigate("/catalogos");
  return (
    <MenuContainer>
      <CatalogoFormContainer codigo={params.codigo} onSubmit={handleSubmit} title="Formulário Catálogo" />
    </MenuContainer>
  );
}

export default CatalogoPage;
