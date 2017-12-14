import * as React from 'react';

import NavbarActions from './NavbarActions';

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
    return (
      <NavbarActions actions={this.actions} open={this.state.open} close={this.close}/>
    );
  }
}

export default NavbarActionsContainer;
