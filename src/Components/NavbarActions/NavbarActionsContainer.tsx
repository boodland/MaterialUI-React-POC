import * as React from 'react';

import NavbarActions, { Props } from './NavbarActions';

interface State {
  open: boolean;
}

class NavbarActionsContainer extends React.Component<{}, State> {

  actions = [
    { title: 'Dashboard', icon: 'apps' },
    { title: 'Subjects', icon: 'school' },
    { title: 'Tutors', icon: 'person' },
    { title: 'Exams', icon: 'edit' }
  ];

  constructor(props: {}) {
    super(props);
    this.state = { open: false };
  }

  close = () => {
    this.setState({ open: false });
  }

  render() {
    const props: Props = {
      actions: this.actions,
      open: this.state.open,
      close: this.close
    };
    return (
      <NavbarActions {...props}/>
    );
  }
}

export default NavbarActionsContainer;
