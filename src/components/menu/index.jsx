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
  Toolbar,
  Typography,
} from "@mui/material";
import {
  BookOutlined,
  CoffeeOutlined,
  ContactPageOutlined,
  DashboardOutlined,
  HailOutlined,
  Inventory2Outlined,
  Menu,
  MenuBook,
} from "@mui/icons-material";
import clsx from "clsx";

import useStyles from "./style";
import MenuItemIcon from "./menuItemIcom";
import { Box } from "@mui/system";

function MenuComponent({ children }) {
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={() => setOpen(!open)}>
              <Menu />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Minha Empresa
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
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
            <Divider />
            <MenuItemIcon
              title="Cardápios"
              description="edição e visualização"
              to="/cardapios"
              icon={<MenuBook />}
            />
          </MenuList>
        </Paper>
      </Grid>
      <Grid item sm={open ? 9 : 12}>
        <Box sx={{height: '6em'}} />
        {children}
      </Grid>
    </Grid>
  );
}

export default MenuComponent;
