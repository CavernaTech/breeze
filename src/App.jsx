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
import CatalogoContainer from "./containers/catalogo.container";

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
        <Route path="/catalogos/+" element={<CatalogoContainer />} />
        <Route path="/catalogos/:codigo" element={<CatalogoContainer />} />
        <Route path="/cardapios" element={<CardapiosPage />} />
        <Route path="/terminal" element={<TerminalContainer />} />
      </Routes>
    </Theme>
  );
}

export default App;
