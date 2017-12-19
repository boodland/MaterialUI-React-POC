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

const SubjectSearch = ({typeList, subjectSearchTitle, subjectSearchType }: StateToProps) => (
  <form noValidate={true} className="flex-container">
    <FormControl className="search-title">
      <InputLabel htmlFor="Title">Title</InputLabel>
      <Input
        id="title"
        type="text"
        value={subjectSearchTitle}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              // onClick={}
            >
              close
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
    <TextField
      className="search-type"
      id="select-currency"
      select={true}
      label="Type"
      value={subjectSearchType}
    >
      {typeList.map((typeItem, index) => (
        <MenuItem key={index} value={typeItem.value}>
          {typeItem.text}
        </MenuItem>
      ))}
    </TextField>
    <Icon className="search-icon">search</Icon>
  </form>
);

export default SubjectSearch;
