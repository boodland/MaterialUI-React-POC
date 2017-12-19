const OPEN_NAVBAR = 'OPEN_NAVBAR';
const CLOSE_NAVBAR = 'CLOSE_NAVBAR';

export const openNavbarAction = () => (
  { type: OPEN_NAVBAR }
);

export const closeNavbarAction = () => (
  { type: CLOSE_NAVBAR }
);

export type NavbarState = {
  open: boolean;
};

const initialState = { open: false };

const navbarReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case OPEN_NAVBAR:
      return {open: true};
    case CLOSE_NAVBAR:
      return {open: false};
    default:
      return state;
  }
};

export default navbarReducer;
