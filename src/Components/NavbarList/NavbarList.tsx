import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Icon } from '../../AppMaterialUI';

export type StateToProps = {
  options: { title: string, icon: string }[];
  open: boolean;
};

export type DispatchToProps = {
  onNavbarClose: Function;
};

const NavbarList = ({ options, open, onNavbarClose }: StateToProps & DispatchToProps) => {
  const listActions = options.map((option, id) => (
    <ListItem key={id} button={true}>
      <ListItemIcon>
        <Icon>{option.icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={option.title} />
    </ListItem>
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
