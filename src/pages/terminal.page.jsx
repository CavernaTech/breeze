import {
  MenuItem,
  Select,
} from "@mui/material";

import MenuContainer from "../containers/menu.container";
import CheckoutComponent from "../components/checkout";
import CatalogoContainer from "../containers/catalogo.container";

function TerminalPage({ isAuthenticated }) {
  return (
    <MenuContainer
      title={
        <Select displayEmpty fullWidth value="1">
          <MenuItem disabled value="1">
            Mesa 1
          </MenuItem>
        </Select>
      }
      hideLogin
    >
      <CatalogoContainer />
      <CheckoutComponent />
    </MenuContainer>
  );
}

TerminalPage.defaultProps = {
  isAuthenticated: false,
};

export default TerminalPage;
