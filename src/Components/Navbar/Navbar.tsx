import * as React from 'react';

import NavbarHeaderConnected from '../NavbarHeader/NavbarHeaderConnected';
import NavbarActionsConnected  from '../NavbarActions/NavbarActionsConnected';

const Navbar = () => (
  <React.Fragment>
    <NavbarHeaderConnected />
    <NavbarActionsConnected />
  </React.Fragment>
);

export default Navbar;
