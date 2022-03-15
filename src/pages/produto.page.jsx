import MenuContainer from "../containers/menu.container";
import ProdutoFormContainer from "../containers/produtoForm.container";

function ProdutoPage({ isEdit }) {
  return (
    <MenuContainer>
      <ProdutoFormContainer />
    </MenuContainer>
  );
}

export default ProdutoPage;
