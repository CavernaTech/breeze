import { ListItemIcon, ListItemText, Tooltip, Typography } from "@mui/material";

import MenuItemLink from "./menuItemLink";
import { menuItemIconStyles } from "./style";

function MenuItemIcon({ to, icon, title, description, disabled }) {
  const classes = menuItemIconStyles();
  return (
    <MenuItemLink key={title} to={to}>
      <Tooltip title={title}>
        <ListItemIcon className={disabled ? classes.disabled : null}>
          { icon }
        </ListItemIcon>
      </Tooltip>
      <ListItemText className={disabled ? classes.disabled : classes.title}>
        {title}
      </ListItemText>
      <Typography variant="body2" className={classes.description}>
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
