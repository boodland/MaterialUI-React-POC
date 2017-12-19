import * as React from 'react';

import NavbarHeaderConnectedWithRouter from '../NavbarHeader/NavbarHeaderConnected';
import NavbarListConnected  from '../NavbarList/NavbarListConnected';

const Navbar = () => (
  <React.Fragment>
    <NavbarHeaderConnectedWithRouter />
    <NavbarListConnected />
  </React.Fragment>
);

export default Navbar;
