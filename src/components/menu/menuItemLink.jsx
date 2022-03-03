import React from 'react';
import { MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function MenuItemLink({ to, children }) {

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <MenuItem component={renderLink}>
      {children}
    </MenuItem>
  );
}

export default MenuItemLink;
