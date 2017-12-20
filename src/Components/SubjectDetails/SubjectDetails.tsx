import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import {
  ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Icon
} from '../../AppMaterialUI';

import './SubjectDetails.css';

type SubjectDetailsProp = {
  subjectId: string;
};

const SubjectDetails = ({ match }: RouteComponentProps<SubjectDetailsProp>) => (
  <div className="subject-details-panel">
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<Icon>info_outline</Icon>}>
        <Typography>General settings</Typography>
        <Typography>I am an expansion panel</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
          maximus est, id dignissim quam.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<Icon>event</Icon>}>
        <Typography>Users</Typography>
        <Typography>
          You are currently not an owner
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
          diam eros in elit. Pellentesque convallis laoreet laoreet.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<Icon>report_problem</Icon>}>
        <Typography>Advanced settings</Typography>
        <Typography>
          Filtering has been entirely disabled for whole web server
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
          eros, vitae egestas augue. Duis vel est augue.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<Icon>library_books</Icon>}>
        <Typography>Advanced settings</Typography>
        <Typography>
          Filtering has been entirely disabled for whole web server
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas
          eros, vitae egestas augue. Duis vel est augue.
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

export default withRouter(SubjectDetails);
