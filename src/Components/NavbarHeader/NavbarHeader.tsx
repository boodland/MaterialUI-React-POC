import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Icon } from '../../AppMaterialUI';
import { Link } from 'react-router-dom';

import './NavbarHeader.css';

export type StateToProps = {
  title: string;
  isDashboardPath: boolean;
  dashboardPath: string;
};

export type DispatchToProps = {
  onNavbarOpen: Function;
  onNavbarGoBack: Function;
};

const NavbarHeader = ({
  title,
  isDashboardPath,
  dashboardPath,
  onNavbarOpen,
  onNavbarGoBack,
}: StateToProps & DispatchToProps) => {

  const LeftAction = () => (
    isDashboardPath ?
      (
        <IconButton
          color="contrast"
          aria-label="Menu"
          className="navbar-action"
          onClick={() => onNavbarOpen()}
        >
          <Icon>menu</Icon>
        </IconButton>
      ) :
      (
        <IconButton
          color="contrast"
          aria-label="Back"
          className="navbar-action"
          onClick={() => onNavbarGoBack()}
        >
          <Icon>arrow_back</Icon>
        </IconButton>
      )
  );

  const RigthAction = () => (
    isDashboardPath ?
      (
        <div className="navbar-action" />
      ) :
      (
        <Link to={dashboardPath} style={{ textDecoration: 'none' }}>
          <IconButton
            color="contrast"
            aria-label="Dashboard"
            className="navbar-action"
          >
            <Icon>apps</Icon>
          </IconButton>
        </Link>
      )
  );

  return (
    <AppBar position="fixed">
      <Toolbar className="navbar-header-toolbar">
        <LeftAction />
        <Typography type="title" color="inherit">
          {title}
        </Typography>
        <RigthAction />
      </Toolbar>
    </AppBar>
  );
};

export default NavbarHeader;
