import * as React from 'react';

import NavbarHeader, { Props as ChildrenProps } from './NavbarHeader';

export interface Props {
  onNavbarOpen: Function;
}

class NavbarHeaderContainer extends React.Component<Props, {}> {
  render() {
    const props: ChildrenProps = {
      title: 'Subject Hub',
      open: this.props.onNavbarOpen
    };
    return (
      <NavbarHeader {...props} />
    );
  }
}

export default NavbarHeaderContainer;
