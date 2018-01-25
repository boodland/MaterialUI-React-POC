import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { AppState } from '../../AppConfigureStore';
import { NavbarState, closeNavbarAction } from '../Navbar/NavbarReducer';

import NavbarList, { StateToProps, DispatchToProps } from './NavbarList';

const mapStateToProps = ({navbarReducer}: AppState): StateToProps => ({
  options : [
    { title: 'Dashboard', link: '/dashboard', icon: 'apps' },
    { title: 'Subjects', link: '/subjects', icon: 'school' },
    { title: 'Tutors', link: '/tutors', icon: 'person' },
    { title: 'Exams', link: '/exams', icon: 'edit', protected: true, message: 'exam list' }
  ],
  open: navbarReducer.open
});

const mapDispatchToProps = (dispatch: Dispatch<NavbarState>): DispatchToProps => ({
  onNavbarClose: () => dispatch(closeNavbarAction())
});

const NavbarListConnected = withRouter(connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(NavbarList));

export default NavbarListConnected;
