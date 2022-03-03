import { ListItemIcon, ListItemText, Typography } from "@mui/material";

import MenuItemLink from "./menuItemLink";
import { menuItemIconStyles } from "./style";

function MenuItemIcon({ to, icon, title, description, disabled }) {
  const classes = menuItemIconStyles();
  return (
    <MenuItemLink key={title} to={to}>
      <ListItemIcon className={disabled ? classes.disabled : null}>
        { icon }
      </ListItemIcon>
      <ListItemText className={disabled ? classes.disabled : null}>{title}</ListItemText>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </MenuItemLink>
  );
}

MenuItemIcon.defaultProps = {
  description: 'em breve',
  disabled: false,
  to: ''
};

export default MenuItemIcon;
