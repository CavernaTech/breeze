import { RecoilRoot } from 'recoil';
import { Typography } from '@mui/material';

import CenterBox from './components/centerBox';

function App() {
  return (
    <RecoilRoot>
      <CenterBox>
        <Typography align="center" variant="h1">
          Breeze
        </Typography>
      </CenterBox>
    </RecoilRoot>
  );
}

export default App;
