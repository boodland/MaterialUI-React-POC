import * as React from 'react';

import {
  TextField, MenuItem, Input, InputLabel, InputAdornment, Icon, FormControl, IconButton
} from '../../AppMaterialUI';

import './SubjectSearch.css';

export type StateToProps = {
  typeList: { text: string, value: string }[]
  subjectSearchTitle: string;
  subjectSearchType: string;
};

export type DispatchToProps = {
  onChangeSubjectTitle: (title: string) => void;
  onChangeSubjectType: (type: string) => void;
};

const SubjectSearch = (
  { typeList, subjectSearchTitle, subjectSearchType, onChangeSubjectTitle, onChangeSubjectType }:
    StateToProps & DispatchToProps
) => (
  <form noValidate={true} className="flex-container">
    <FormControl className="search-title">
      <InputLabel htmlFor="Title">Title</InputLabel>
      <Input
        id="title"
        type="text"
        value={subjectSearchTitle}
        onChange={(event) => onChangeSubjectTitle(event.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => onChangeSubjectTitle('')}
            >
              close
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
    <TextField
      className="search-type"
      id="select-type"
      select={true}
      label="Type"
      value={subjectSearchType}
      onChange={(event) => onChangeSubjectType(event.target.value)}
    >
      {typeList.map(typeItem => (
        <MenuItem key={typeItem.value} value={typeItem.value}>
          {typeItem.text}
        </MenuItem>
      ))}
    </TextField>
    <Icon className="search-icon">search</Icon>
  </form>
);

export default SubjectSearch;
