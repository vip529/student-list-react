import React, { useState } from "react";
import StudentDetail from "./StudentDetail";
import { Box } from "@material-ui/core";
import RenderList from "./RenderList";

/*
 *Component to render StudentList
 * students - a state to store the array of students as objects.
 */
const StudentList = () => {
  const [students] = useState([
    {
      id: 1,
      name: "Pokala Anirudh",
      rollNumber: "B170001",
      gpa: "9.2",
      hobbies: "Reading, Development",
      aboutMe: "I love data science",
    },
    {
      id: 2,
      name: "Utsav Singh",
      rollNumber: "B170045",
      gpa: "8.6",
      hobbies: "Travelling",
      aboutMe: "I want to travel all around the globe",
    },
    {
      id: 3,
      name: "Varun Teja",
      rollNumber: "B170064",
      gpa: "8.1",
      hobbies: "Reading Technological Magazines, Watching movies",
      aboutMe: "I love computer science",
    },
    {
      id: 4,
      name: "Abhinesh Kumar",
      rollNumber: "B170076",
      gpa: "8.3",
      hobbies: "Playing Cricket, Writing",
      aboutMe: "I back myself to overcome every situation",

    },
    {
      id: 5,
      name: "Ayush Raj",
      rollNumber: "B170185",
      gpa: "8.2",
      hobbies: "Sleeping,Reading",
      aboutMe: "I love to code",
    },
    {
      id: 6,
      name: "Kumar Gaurav Singh",
      rollNumber: "B170090",
      gpa: "7.5",
      hobbies: "Playing Sports,Dancing",
      aboutMe: "I love to innovate things",
    }
  ]);

  const [activeStudent, setActiveStudent] = useState({});
  const [searchedText, setSearchedText] = React.useState("");

  /* to handle clicks on students */

  const handleClick = (student) => {
    return setActiveStudent(student);
  };

  /**
   * function to set searchedText state based on user search.
   */
  const handleChange = (event) => {
    setActiveStudent({});
    setSearchedText(event.target.value);
  };

  return (
    <div>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        <RenderList
          students={students.filter((student) => {
            return student.name
              .split(" ")
              .join("")
              .toLowerCase()
              .includes(searchedText.split(" ").join("").toLowerCase());
          })}
          onClick={handleClick}
          onChange={handleChange}
        />
        {Object.keys(activeStudent).length !== 0 && <StudentDetail student={activeStudent} />}
      </Box>
    </div>
  );
};

export default StudentList;
