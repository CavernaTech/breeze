import { RecoilRoot } from 'recoil';
import { CssBaseline, Typography } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Theme from './utils/theme/theme.component';
import CenterBox from './components/centerBox';
import DashboardPage from './pages/dashboard.page';
import PedidosPage from './pages/pedidos.page';
import EstoquePage from './pages/estoque.page';
import CardapiosPage from './pages/cardapios.page';
import ProdutosPage from './pages/produtos.page';

function App() {
  return (
    <RecoilRoot>
      <Theme>
        <CenterBox fixed>
          <CssBaseline />
          <Typography align="center" variant="h1">
            Breeze
          </Typography>
        </CenterBox>
        <Routes>
          <Route path="/" element={<DashboardPage />}  />
          <Route path="/pedidos" element={<PedidosPage />} />
          <Route path="/estoque" element={<EstoquePage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/cardapios" element={<CardapiosPage />} />
        </Routes>
      </Theme>
    </RecoilRoot>
  );
}

export default App;
