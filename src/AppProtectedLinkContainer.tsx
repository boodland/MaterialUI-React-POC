import * as React from 'react';
import { Link } from 'react-router-dom';

import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from './AppMaterialUI';

type AppProtectedLinkContainerProps = {
  children: React.ReactNode,
  message?: string,
  to: string
  className?: string
  protected?: boolean
};

type AppProtectedLinkContainerState = {
  open: boolean;
};

class AppProtectedLinkContainer extends
  React.Component<AppProtectedLinkContainerProps, AppProtectedLinkContainerState> {

  handleClickPropagation = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
  }

  handleClickOpen = () => this.setState({ open: true });

  handleClose = () => {
    this.setState({ open: false });
  }

  constructor(props: AppProtectedLinkContainerProps, state: AppProtectedLinkContainerState) {
    super(props);
    this.state = { open: false };
  }

  render() {

    const NoAuthorizedDialog = () => (
      <div onClick={this.handleClickPropagation}>
        <div onClick={this.handleClickOpen}>
          {this.props.children}
        </div>
        <Dialog
          open={this.state.open}
          onBackdropClick={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Login Required!'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              You must be logged in to {this.props.message}.
              <br/>
              Unfortunately this is just a proof of concept version and login is not implemented.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} raised={true} color="primary">
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );

    return (
      <div className={this.props.className}>
        {
          this.props.protected ?
            <NoAuthorizedDialog /> :
            <Link to={this.props.to} style={{ textDecoration: 'none' }}>
              {this.props.children}
            </Link>
        }
      </div>
    );
  }
}

export default AppProtectedLinkContainer;
