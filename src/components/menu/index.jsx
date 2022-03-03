import React, { useState } from "react";
import {
  Divider,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
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
      <Grid item md={open ? 3 : 1}>
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
      <Grid item md={open ? 9 : 11}>
        {children}
      </Grid>
    </Grid>
  );
}

export default MenuComponent;
