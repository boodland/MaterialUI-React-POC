import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { withRouter } from 'react-router';

import { NavbarState, openNavbarAction } from '../Navbar/NavbarReducer';

import NavbarHeader, { StateToProps, DispatchToProps } from './NavbarHeader';

const DASHBOARD_PATH = '/dashboard';

const mapStateToProps = (): StateToProps => ({
  title: 'Subject Hub',
  isDashboardPath: location.pathname === DASHBOARD_PATH,
  dashboardPath: DASHBOARD_PATH
});

const mapDispatchToProps = (dispatch: Dispatch<NavbarState>): DispatchToProps => ({
  onNavbarOpen: () => dispatch(openNavbarAction()),
  onNavbarGoBack: () => history.back()
});

const NavbarHeaderConnected = withRouter(connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(NavbarHeader));

export default NavbarHeaderConnected;
