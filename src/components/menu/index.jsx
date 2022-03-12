import React, { useState } from "react";
import {
  AppBar,
  Button,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AirlineStopsOutlined,
  BookOutlined,
  Cable,
  CoffeeOutlined,
  ContactPageOutlined,
  DashboardOutlined,
  HailOutlined,
  MoveToInbox,
  Inventory2Outlined,
  Menu,
  MenuBook,
  GroupsOutlined,
  Add,
} from "@mui/icons-material";
import clsx from "clsx";

import useStyles from "./style";
import MenuItemIcon from "./menuItemIcom";
import { Box } from "@mui/system";
import AccountComponent from "./account";

function MenuComponent({
  children,
  isAuthenticated,
  user,
  login,
  logout,
  title,
  hideLogin,
}) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <Grid
      alignItems="stretch"
      container
      direction="row"
      justifyContent="flex-start"
      spacing={2}
    >
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton onClick={() => setOpen(!open)} size="small">
            <Menu />
          </IconButton>
          {title || (
            <Select displayEmpty value="my">
              <MenuItem disabled value="my">
                Minha Empresa
              </MenuItem>
              <Button disabled fullWidth variant="text">
                <Add />
                Nova Empresa
              </Button>
              <Typography
                variant="body2"
                color="text.disabled"
                textAlign="right"
              >
                em breve
              </Typography>
            </Select>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: hideLogin ? "none" : "inherit", width: "100%" }}>
            <AccountComponent
              isAuthenticated={isAuthenticated}
              user={user}
              login={login}
              logout={logout}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Grid item sm={open ? 3 : 0}>
        <Paper
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
        >
          <MenuList>
            <MenuItem onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <Menu />
              </ListItemIcon>
              <ListItemText />
              <Typography variant="body2" color="text.secondary">
                fechar menu
              </Typography>
            </MenuItem>
            <Divider />
            <MenuItemIcon
              title="Dashboard"
              description="visão geral do Breeze"
              to="/"
              icon={<DashboardOutlined />}
            />
            <MenuItemIcon
              title="Pedidos"
              description="abertura e visualização"
              to="/pedidos"
              icon={<BookOutlined />}
            />
            <MenuItemIcon
              disabled
              title="Estoque"
              icon={<Inventory2Outlined />}
            />
            <Divider />
            <MenuItemIcon
              title="Produtos"
              description="edição e visualização"
              to="/produtos"
              icon={<CoffeeOutlined />}
            />
            <MenuItemIcon disabled title="Processos" icon={<Cable />} />
            <MenuItemIcon
              disabled
              title="Etapas"
              icon={<AirlineStopsOutlined />}
            />
            <MenuItemIcon
              disabled
              title="Clientes"
              icon={<ContactPageOutlined />}
            />
            <MenuItemIcon
              disabled
              title="Fornecedores"
              icon={<HailOutlined />}
            />
            <MenuItemIcon
              disabled
              title="Funcionários"
              icon={<GroupsOutlined />}
            />
            <Divider />
            <MenuItemIcon
              title="Terminal de Pedidos"
              description="abertura e acompanhamento"
              to="/terminal"
              icon={<MoveToInbox />}
            />
            <MenuItemIcon disabled title="Catálogos" icon={<MenuBook />} />
          </MenuList>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={open ? 9 : 12}>
        <Box
          className={clsx(classes.content, {
            [classes.contentOpen]: open,
            [classes.contentClose]: !open,
          })}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
}

MenuComponent.defaultProps = {
  title: null,
  hideLogin: false,
};

export default MenuComponent;
