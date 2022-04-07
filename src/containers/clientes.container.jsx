import ClienteController from "../controllers/cliente.controller";
import ClientesPage from "../pages/clientes.page";

function ClientesContainer(props) {
  const state = {
    fields: [
      {
        name: "nome",
        title: "Nome",
      },
    ],
    items: ClienteController.useClientes(),
  };

  const functions = {};

  return <ClientesPage {...state} {...functions} {...props} />;
}

export default ClientesContainer;
