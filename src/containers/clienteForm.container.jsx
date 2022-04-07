import FormComponent from "../components/form";
import ClienteController from "../controllers/cliente.controller";

function ClienteFormContainer(props) {
  const { codigo, onSubmit } = props;
  const cliente = ClienteController.useClienteByCodigo(codigo);
  const value = { ...cliente } || {
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
    ],
    value,
  };

  const handleSubmit = async (data) => {
    if (cliente) {
      await ClienteController.updateCliente(codigo, data);
    } else {
      await ClienteController.addCliente(data);
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
      title="Formulário Cliente"
    />
  );
}

export default ClienteFormContainer;
