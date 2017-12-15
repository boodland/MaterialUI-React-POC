import * as React from 'react';

import NavbarHeaderConnected from '../NavbarHeader/NavbarHeaderConnected';
import NavbarListConnected  from '../NavbarList/NavbarListConnected';

const Navbar = () => (
  <React.Fragment>
    <NavbarHeaderConnected />
    <NavbarListConnected />
  </React.Fragment>
);

export default Navbar;
