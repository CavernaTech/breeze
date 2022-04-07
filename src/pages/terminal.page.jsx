import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import MenuContainer from "../containers/menu.container";
import CheckoutComponent from "../components/checkout";
import CatalogoContainer from "../containers/catalogo.container";

function TerminalPage({ isAuthenticated, clientes }) {
  if (!isAuthenticated) {
    return (
      <>
        <CatalogoContainer />
        <CheckoutComponent />
      </>
    );
  }
  return (
    <MenuContainer
      title={
        <FormControl fullWidth>
          <InputLabel id="cliente-select-label">Selecionar Cliente</InputLabel>
          <Select fullWidth label="Selecionar Cliente" labelId="cliente-select-label" value="">
            {clientes.map((cliente) => (
              <MenuItem value={cliente.codigo}>{cliente.nome}</MenuItem>
            ))}
          </Select>
        </FormControl>
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
  clientes: [],
};

export default TerminalPage;
