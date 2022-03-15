import FormComponent from "../components/form";

function ProdutoFormContainer(props) {
  const value = null;
  const state = {
    fields: [
      {
        name: "nome",
        type: "text",
        title: "Nome",
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
    value
  };

  const functions = {
  };

  return <FormComponent {...state} {...functions} {...props} title="Formulário Produto" />;
}

export default ProdutoFormContainer;
