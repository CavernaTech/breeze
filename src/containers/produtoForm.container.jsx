import FormComponent from "../components/form";
import ProdutoController from "../controllers/produto.controller";

function ProdutoFormContainer(props) {
  const value = {
    quantidade: 1,
  };
  const state = {
    fields: [
      {
        name: "nome",
        type: "text",
        title: "Nome",
        required: true,
      },
      {
        name: "valor",
        type: "number",
        title: "Valor",
        required: true,
      },
      {
        name: "quantidade",
        type: "number",
        title: "Quantidade",
      },
      {
        name: "tipo",
        type: "text",
        title: "Tipo",
      },
      {
        name: "categoria",
        type: "text",
        title: "Categoria",
      },
    ],
    value,
  };

  const functions = {
    onDelete: () => {},
    onSubmit: ProdutoController.addProduto,
  };

  return (
    <FormComponent
      {...state}
      {...functions}
      {...props}
      title="Formulário Produto"
    />
  );
}

export default ProdutoFormContainer;
