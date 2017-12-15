import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { closeNavbarAction } from '../Navbar/NavbarReducer';

import NavbarList, { StateToProps, DispatchToProps } from './NavbarList';

const mapStateToProps = (state: boolean): StateToProps => ({
  options : [
    { title: 'Dashboard', link: '/dashboard', icon: 'apps' },
    { title: 'Subjects', link: '/subjects', icon: 'school' },
    { title: 'Tutors', link: '/tutors', icon: 'person' },
    { title: 'Exams', link: '/exams', icon: 'edit' }
  ],
  open: state
});

const mapDispatchToProps = (dispatch: Dispatch<boolean>): DispatchToProps => ({
  onNavbarClose: () => dispatch(closeNavbarAction())
});

const NavbarListConnected = connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(NavbarList);

export default NavbarListConnected;
