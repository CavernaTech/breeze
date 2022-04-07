import TerminalComponent from "../pages/terminal.page";
import AuthenticationController from "../controllers/authentication.controller";
import ClienteController from "../controllers/cliente.controller";

function TerminalContainer(props) {
  const state = {
    isAuthenticated: AuthenticationController.useAuthenticationStatus(),
    clientes: ClienteController.useClientes()
  };

  const functions = {};

  return <TerminalComponent {...state} {...functions} {...props} />;
}

export default TerminalContainer;
