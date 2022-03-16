import { useNavigate, useParams } from "react-router-dom";
import MenuContainer from "../containers/menu.container";
import ProdutoFormContainer from "../containers/produtoForm.container";

function ProdutoPage() {
  const params = useParams();
  const navigate = useNavigate();
  const handleSubmit = () => navigate("/produtos");
  return (
    <MenuContainer>
      <ProdutoFormContainer codigo={params.codigo} onSubmit={handleSubmit} />
    </MenuContainer>
  );
}

export default ProdutoPage;
