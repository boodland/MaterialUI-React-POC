import * as React from 'react';

import NavbarHeader, { Props } from './NavbarHeader';

class NavbarHeaderContainer extends React.Component {
  render() {
    const props: Props = { title: 'Subject Hub' };
    return (
      <NavbarHeader {...props} />
    );
  }
}

export default NavbarHeaderContainer;
