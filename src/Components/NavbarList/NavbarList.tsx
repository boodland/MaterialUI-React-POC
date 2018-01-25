import * as React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Icon } from '../../AppMaterialUI';

import AppProtectedLinkContainer from '../../AppProtectedLinkContainer';

export type StateToProps = {
  options: { title: string, link: string, icon: string, protected?: boolean, message?: string }[];
  open: boolean;
};

export type DispatchToProps = {
  onNavbarClose: Function;
};

const NavbarList = ({ options, open, onNavbarClose }: StateToProps & DispatchToProps) => {

  const listActions = options.map((option, id) => (
    <AppProtectedLinkContainer
      key={id}
      to={option.link}
      message={`to navigate to ${option.message}`}
      protected={option.protected}
    >
      <ListItem button={true}>
        <ListItemIcon>
          <Icon>{option.icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={option.title} />
      </ListItem>
    </AppProtectedLinkContainer>
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
