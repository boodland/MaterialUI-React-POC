import * as React from 'react';

import NavbarActions, { Props as ChildrenProps } from './NavbarActions';

export interface Props {
  open: boolean;
  onNavbarClose: Function;
}

class NavbarActionsContainer extends React.Component<Props, {}> {

  actions = [
    { title: 'Dashboard', icon: 'apps' },
    { title: 'Subjects', icon: 'school' },
    { title: 'Tutors', icon: 'person' },
    { title: 'Exams', icon: 'edit' }
  ];

  close = () => {
    this.props.onNavbarClose();
  }

  render() {
    const props: ChildrenProps = {
      actions: this.actions,
      open: this.props.open,
      close: this.close
    };
    return (
      <NavbarActions {...props}/>
    );
  }
}

export default NavbarActionsContainer;
