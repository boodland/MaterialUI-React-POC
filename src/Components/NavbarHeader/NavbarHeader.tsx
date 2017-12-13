import * as React from 'react';
import { AppBar, Toolbar, Typography } from '../../AppMaterialUI';

import './NavbarHeader.css';

export interface Props {
  title: string;
}

const NavbarHeader = ({ title }: Props ) => (
  <div>
    <AppBar position="static">
        <Toolbar className="navbar-header-toolbar">
          <Typography type="title" color="inherit">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
  </div>
);

export default NavbarHeader;
