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
        name: "descricao",
        type: "text",
        title: "Descrição",
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
