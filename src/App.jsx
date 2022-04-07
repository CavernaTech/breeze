import { CssBaseline, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Theme from "./utils/theme/theme.component";
import CenterBox from "./components/centerBox";
import DashboardPage from "./pages/dashboard.page";
import PedidosPage from "./pages/pedidos.page";
import EstoquePage from "./pages/estoque.page";
import CardapiosPage from "./pages/cardapios.page";
import TerminalContainer from "./containers/terminal.container";
import ProdutoPage from "./pages/produto.page";
import ProdutosContainer from "./containers/produtos.container";
import CatalogosContainer from "./containers/catalogos.cotainer";
import CatalogoPage from "./pages/catalogo.page";
import ClientesContainer from "./containers/clientes.container";
import ClientePage from "./pages/cliente.page";

function App() {
  return (
    <Theme>
      <CenterBox fixed>
        <CssBaseline />
        <Typography align="center" variant="h1">
          Breeze
        </Typography>
      </CenterBox>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/pedidos" element={<PedidosPage />} />
        <Route path="/estoque" element={<EstoquePage />} />
        <Route path="/produtos" element={<ProdutosContainer />} />
        <Route path="/produtos/+" element={<ProdutoPage />} />
        <Route path="/produtos/:codigo" element={<ProdutoPage />} />
        <Route path="/catalogos" element={<CatalogosContainer />} />
        <Route path="/catalogos/+" element={<CatalogoPage />} />
        <Route path="/catalogos/:codigo" element={<CatalogoPage />} />
        <Route path="/cardapios" element={<CardapiosPage />} />
        <Route path="/terminal" element={<TerminalContainer />} />
        <Route path="/clientes" element={<ClientesContainer />} />
        <Route path="/clientes/+" element={<ClientePage />} />
        <Route path="/clientes/:codigo" element={<ClientePage />} />
      </Routes>
    </Theme>
  );
}

export default App;
