const OPEN_NAVBAR = 'OPEN_NAVBAR';
const CLOSE_NAVBAR = 'CLOSE_NAVBAR';

export const openNavbarAction = () => (
  { type: OPEN_NAVBAR }
);

export const closeNavbarAction = () => (
  { type: CLOSE_NAVBAR }
);

const navbarReducer = (state = false, action: { type: string }) => {
  switch (action.type) {
    case OPEN_NAVBAR:
      return true;
    case CLOSE_NAVBAR:
      return false;
    default:
      return state;
  }
};

export default navbarReducer;
