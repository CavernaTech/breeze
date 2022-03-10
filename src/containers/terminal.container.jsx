import TerminalComponent from "../pages/terminal.page";
import AuthenticationController from "../controllers/authentication.controller";

function TerminalContainer(props) {
  const state = {
    isAuthenticated: AuthenticationController.useAuthenticationStatus(),
  };

  const functions = {};

  return <TerminalComponent {...state} {...functions} {...props} />;
}

export default TerminalContainer;
