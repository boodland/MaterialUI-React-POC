import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, MenuIcon } from '../../AppMaterialUI';

import './NavbarHeader.css';

export type StateToProps = {
  title: string;
};

export type DispatchToProps = {
  onNavbarOpen: Function;
};

const NavbarHeader = ({ title, onNavbarOpen }: StateToProps & DispatchToProps ) => (
  <div>
    <AppBar position="fixed">
      <Toolbar className="navbar-header-toolbar">
        <IconButton
          color="contrast"
          aria-label="Menu"
          className="navbar-action"
          onClick={() => onNavbarOpen()}
        >
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
