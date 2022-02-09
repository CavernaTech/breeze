import { RecoilRoot } from 'recoil';
import { CssBaseline, Typography } from '@mui/material';

import Theme from './utils/theme/theme.component';
import CenterBox from './components/centerBox';

function App() {
  return (
    <RecoilRoot>
      <Theme>
        <CenterBox>
          <CssBaseline />
          <Typography align="center" variant="h1">
            Breeze
          </Typography>
        </CenterBox>
      </Theme>
    </RecoilRoot>
  );
}

export default App;
