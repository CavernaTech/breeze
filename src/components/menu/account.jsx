import { Avatar, Button, Grid, Typography } from "@mui/material";

function AccountComponent({ isAuthenticated, user, login, logout }) {
  const handleLogin = (e) => {
    e.preventDefault();
    login();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };

  return (
    <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={2}>
      <Grid item sm={12} sx={{ display: isAuthenticated ? "none" : "inherit" }}>
        <Button
          color="inherit"
          disabled={isAuthenticated}
          onClick={handleLogin}
        >
          Entrar
        </Button>
      </Grid>
      <Grid item sx={{ display: !isAuthenticated ? "none" : "inherit" }}>
        <Typography>{user.name}</Typography>
      </Grid>
      <Grid item md={1} sx={{ display: !isAuthenticated ? "none" : "inherit" }}>
        <Avatar src={user.photo} />
      </Grid>
      <Grid item md={1} sx={{ display: !isAuthenticated ? "none" : "inherit" }}>
        <Button
          color="inherit"
          disabled={!isAuthenticated}
          onClick={handleLogout}
        >
          Sair
        </Button>
      </Grid>
    </Grid>
  );
}

AccountComponent.defaultProps = {
  user: {
    name: '',
    photo: ''
  }
}

export default AccountComponent;
