import MenuComponent from "../components/menu";
import AuthenticationController from "../controllers/authentication.controller";

function MenuContainer(props) {
  const state = {
    isAuthenticated: AuthenticationController.useAuthenticationStatus(),
    user: AuthenticationController.useAuthenticationInfo(),
  };

  const functions = {
    login: AuthenticationController.login,
    logout: AuthenticationController.logout,
  };

  return <MenuComponent {...state} {...functions} {...props} />;
}

export default MenuContainer;
