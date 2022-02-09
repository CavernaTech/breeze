import { RecoilRoot } from 'recoil';
import { CssBaseline, Typography } from '@mui/material';

import Theme from './utils/theme/theme.component';
import CenterBox from './components/centerBox';
import DashboardPage from './pages/dashboard.page';

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
        <DashboardPage />
      </Theme>
    </RecoilRoot>
  );
}

export default App;
