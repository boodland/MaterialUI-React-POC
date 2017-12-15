import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { closeNavbarAction } from '../Navbar/NavbarReducer';

import NavbarActions, { StateToProps, DispatchToProps } from './NavbarActions';

const mapStateToProps = (state: boolean): StateToProps => ({
  actions : [
    { title: 'Dashboard', icon: 'apps' },
    { title: 'Subjects', icon: 'school' },
    { title: 'Tutors', icon: 'person' },
    { title: 'Exams', icon: 'edit' }
  ],
  open: state
});

const mapDispatchToProps = (dispatch: Dispatch<boolean>): DispatchToProps => ({
  onNavbarClose: () => dispatch(closeNavbarAction())
});

const NavbarActionsConnected = connect<StateToProps, DispatchToProps>(
  mapStateToProps,
  mapDispatchToProps
)(NavbarActions);

export default NavbarActionsConnected;
