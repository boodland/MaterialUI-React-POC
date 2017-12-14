import * as React from 'react';

import NavbarHeaderContainer, {Props as NavbarHeaderProps } from '../NavbarHeader/NavbarHeaderContainer';
import NavbarActionsContainer , { Props as NavbarActionsProps } from '../NavbarActions/NavbarActionsContainer';

interface State {
  open: boolean;
}

class NavbarContainer extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { open: false };
  }

  toggleNavBar = (state: boolean) => {
    this.setState({ open: state });
  }

  render() {
    const navbarActionsProps: NavbarActionsProps = {
        open: this.state.open,
        onNavbarClose: () => this.toggleNavBar(false)
    };

    const navbarHeaderProps: NavbarHeaderProps = {
      onNavbarOpen: () => this.toggleNavBar(true)
    };

    return (
      <React.Fragment>
        <NavbarHeaderContainer {...navbarHeaderProps}/>
        <NavbarActionsContainer {...navbarActionsProps}/>
      </React.Fragment>
    );
  }
}

export default NavbarContainer;
