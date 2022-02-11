import React, { useState } from 'react';
import {
  Divider,
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography
} from '@mui/material';
import {
  BookOutlined,
  CoffeeOutlined,
  ContactPageOutlined,
  DashboardOutlined,
  HailOutlined,
  Inventory2Outlined,
  Menu
} from '@mui/icons-material';
import clsx from 'clsx';

import useStyles from './style';
import MenuItemLink from './menuItemLink';


function MenuComponent({ children }) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <Grid alignItems="stretch" container direction="row" justifyContent="flex-start" spacing={2}>
      <Grid item md={open ? 3 : 1}>
        <Paper
          className={clsx(
            classes.drawer,
            {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }
          )}
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
            <MenuItemLink to="/">
              <ListItemIcon>
                <DashboardOutlined />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
              <Typography variant="body2" color="text.secondary">
                visão geral do Breeze
              </Typography>
            </MenuItemLink>
            <MenuItemLink to="/pedidos">
              <ListItemIcon>
                <BookOutlined />
              </ListItemIcon>
              <ListItemText>Pedidos</ListItemText>
              <Typography variant="body2" color="text.secondary">
                abertura e visualização
              </Typography>
            </MenuItemLink>
            <MenuItemLink to="/estoque">
              <ListItemIcon>
                <Inventory2Outlined />
              </ListItemIcon>
              <ListItemText>Estoque</ListItemText>
              <Typography variant="body2" color="text.secondary">
                movimentação e visualização
              </Typography>
            </MenuItemLink>
            <Divider />
            <MenuItemLink to="/clientes">
              <ListItemIcon>
                <ContactPageOutlined />
              </ListItemIcon>
              <ListItemText>Clientes</ListItemText>
            </MenuItemLink>
            <MenuItemLink to="/fornecedores">
              <ListItemIcon>
                <HailOutlined />
              </ListItemIcon>
              <ListItemText>Fornecedores</ListItemText>
            </MenuItemLink>
            <MenuItemLink to="/produtos">
              <ListItemIcon>
                <CoffeeOutlined />
              </ListItemIcon>
              <ListItemText>Produtos</ListItemText>
            </MenuItemLink>
          </MenuList>
        </Paper>
      </Grid>
      <Grid item md={open ? 9 : 11}>
        {children}
      </Grid>
    </Grid>
  );
};

export default MenuComponent;
