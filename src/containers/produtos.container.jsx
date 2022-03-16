import ProdutoController from "../controllers/produto.controller";
import ProdutosPage from "../pages/produtos.page";

function ProdutosContainer(props) {
  const state = {
    fields: [
      {
        name: "nome",
        title: "Nome",
      },
    ],
    items: ProdutoController.useProdutos(),
  };

  const functions = {};

  return <ProdutosPage {...state} {...functions} {...props} />;
}

export default ProdutosContainer;
