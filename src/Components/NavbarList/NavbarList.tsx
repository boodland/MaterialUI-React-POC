import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Icon } from '../../AppMaterialUI';

export type StateToProps = {
  actions: { title: string, icon: string }[];
  open: boolean;
};

export type DispatchToProps = {
  onNavbarClose: Function;
};

const NavbarList = ({ actions, open, onNavbarClose }: StateToProps & DispatchToProps) => {
  const listActions = actions.map((action, id) => (
    <ListItem key={id} button={true}>
      <ListItemIcon>
        <Icon>{action.icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={action.title} />
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
