import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Icon } from '../../AppMaterialUI';
import { Link } from 'react-router-dom';

export type StateToProps = {
  options: { title: string, link: string, icon: string }[];
  open: boolean;
};

export type DispatchToProps = {
  onNavbarClose: Function;
};

const NavbarList = ({ options, open, onNavbarClose }: StateToProps & DispatchToProps) => {
  const listActions = options.map((option, id) => (
    <Link key={id} to={option.link} style={{ textDecoration: 'none' }}>
      <ListItem button={true}>
        <ListItemIcon>
          <Icon>{option.icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={option.title} />
      </ListItem>
    </Link>
    )
  );
  return (
    <Drawer open={open} onRequestClose={() => onNavbarClose()}>
      <div
        role="button"
        onClick={() => onNavbarClose()}
        onKeyDown={() => onNavbarClose()}
      >
        <List>
          {listActions}
        </List>
      </div>
    </Drawer>
  );
};

export default NavbarList;
