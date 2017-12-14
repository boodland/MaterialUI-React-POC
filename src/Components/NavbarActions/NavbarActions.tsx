import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Icon } from '../../AppMaterialUI';

export interface Props {
  actions: {title: string, icon: string}[];
  open: boolean;
  close: Function;
}

const NavbarActions = ({ actions, open, close }: Props) => (
  <Drawer open={open} onRequestClose={() => close()}>
    <div
      tabIndex={0}
      role="button"
      onClick={() => close()}
      onKeyDown={() => close()}
    >
      <List>
        {actions.map((action, id) => (
          <ListItem key={id} button={true}>
            <ListItemIcon>
              <Icon>{action.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={action.title} />
          </ListItem>
          )
        )}
      </List>
    </div>
  </Drawer>
);

export default NavbarActions;
