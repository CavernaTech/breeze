import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '100%',
    height: '100vh',
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(6),
    },
  },
}));

export default useStyles;
