import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuIcon } from '../../AppMaterialUI';

import './NavbarHeader.css';

export interface Props {
  title: string;
}

const NavbarHeader = ({ title }: Props ) => (
  <div>
    <AppBar position="static">
      <Toolbar className="navbar-header-toolbar">
        <IconButton color="contrast" aria-label="Menu" className="navbar-action">
          <MenuIcon />
        </IconButton>
        <Typography type="title" color="inherit">
          {title}
        </Typography>
        <div className="navbar-action"/>
      </Toolbar>
    </AppBar>
  </div>
);

export default NavbarHeader;
