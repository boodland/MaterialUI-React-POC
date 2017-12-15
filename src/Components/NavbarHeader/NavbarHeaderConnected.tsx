import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { openNavbarAction } from '../Navbar/NavbarReducer';

import NavbarHeader, { StateToProps, DispatchToProps } from './NavbarHeader';

const mapStateToProps = (): StateToProps => ({
  title: 'Subject Hub'
});

const mapDispatchToProps = (dispatch: Dispatch<boolean>): DispatchToProps => ({
  onNavbarOpen: () => dispatch(openNavbarAction())
});

const NavbarHeaderConnected = connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(NavbarHeader);

export default NavbarHeaderConnected;
