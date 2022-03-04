import MenuComponent from "../components/menu";
import AuthenticationController from "../controllers/authentication.controller";

function MenuContainer(props) {
  const state = {
    isAuthenticated: AuthenticationController.useAuthenticationStatus(),
  };

  const functions = {
    login: AuthenticationController.login,
  };

  return <MenuComponent {...state} {...functions} {...props} />;
}

export default MenuContainer;
