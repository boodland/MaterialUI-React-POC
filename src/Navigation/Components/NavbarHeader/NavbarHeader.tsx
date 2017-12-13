import * as React from 'react';

export interface Props {
  title: string;
}

const NavbarHeader = ({ title }: Props ) => (
  <p>Navbar Header Component with title {title} Works!</p>
);

export default NavbarHeader;
