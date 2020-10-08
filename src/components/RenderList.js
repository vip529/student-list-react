import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { List, ListItem, ListItemIcon, ListItemText, TextField } from "@material-ui/core";

/**
 *component to render list filtered on basis of searched student
 * @param {students,handleClick,handleChange} props
 * studentList - an array of student objects
 * handleCLick - a parent function to handle clicks on a list item
 * handleChange - a parent function to handle input of search box.
 *
 */
const RenderList = (props) => {
  const studentList = props.students;
  const handleClick = props.onClick;
  const handleChange = props.onChange;
  const  textColor = {
    color:"rgb(6, 96, 148)",
  }

  return (
    <div className="left-container studentsList">
      <TextField 
      id="search-box" 
      label="Search Students"
      autoFocus
      margin = "dense"
      variant="outlined" 
      onChange={handleChange}/>
      <List component="nav" aria-label="main mailbox folders">
        <div className="student-list">
          {studentList.map((student, index) => (
            <ListItem
              button
              onClick={() => handleClick(student)}
              key={student.id}
            >
              <ListItemIcon>
                <AccountCircleIcon color='primary'/>
              </ListItemIcon>
              <ListItemText 
              primaryTypographyProps={{ style: textColor }}
              primary={student.name}/>
            </ListItem>
          ))}
        </div>
      </List>
    </div>
  );
};

export default RenderList;
