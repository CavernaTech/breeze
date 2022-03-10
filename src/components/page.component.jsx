import { Container, Grid, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(6),
    },
  },
  paper: {
    padding: "1.1em",
    minHeight: "60vh",
    width: "100%",
    marginTop: "6em",
  },
}));

function PageComponent({ children, title, icon }) {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2">{icon}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">{title}</Typography>
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

PageComponent.defaultProps = {
  title: "",
  icon: "",
};

export default PageComponent;
