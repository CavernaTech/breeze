import {
  AppBar,
  MenuItem,
  Select,
  Toolbar,
} from "@mui/material";

import MenuContainer from "../containers/menu.container";
import CheckoutComponent from "../components/checkout";

function TerminalPage({ isAuthenticated }) {
  return (
    <MenuContainer>
      <AppBar position="fixed">
        <Toolbar>
          <Select displayEmpty fullWidth value="1">
            <MenuItem disabled value="1">
              Mesa 1
            </MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
      <CheckoutComponent />
    </MenuContainer>
  );
}

TerminalPage.defaultProps = {
  isAuthenticated: false,
};

export default TerminalPage;
