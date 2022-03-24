import FormComponent from "../components/form";
import ProdutoController from "../controllers/produto.controller";

function ProdutoFormContainer(props) {
  const { codigo, onSubmit } = props;
  const produto = ProdutoController.useProdutoByCodigo(codigo);
  const value = { ...produto } || {
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

  const handleSubmit = async (data) => {
    if (produto) {
      await ProdutoController.updateProduto(codigo, data);
    } else {
      await ProdutoController.addProduto(data);
    }
    onSubmit(); 
  }

  const functions = {
    onDelete: () => {},
    onSubmit: handleSubmit,
  };

  return (
    <FormComponent
      {...props}
      {...state}
      {...functions}
      title="Formulário Produto"
    />
  );
}

export default ProdutoFormContainer;
