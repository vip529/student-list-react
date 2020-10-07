import React, { useState } from 'react';
import StudentDetail from './StudentDetail';

/*
*Component to render StudentList
* students - a state storing array of students as objects.
*/
const StudentList = () => {

  const [students] = useState([
    {
      id: 1,
      name : "Pokala Anirudh",
      rollNumber : "B170001",
      gpa : "9.2",
    },
    {
      id: 2,
      name : "Utsav Singh",
      rollNumber : "B170045",
      gpa : "8.6",
    },
    {
      id: 3,
      name : "Chandru Varun Teja",
      rollNumber : "B170064",
      gpa : "8.1",
    },
    {
      id: 4,
      name : "Abhinesh Kumar",
      rollNumber : "B170076",
      gpa : "8.3",
    },
    {
      id: 5,
      name : "Ayush Raj",
      rollNumber : "B170185",
      gpa : "8.2",
    },
    {
      id: 6,
      name : "Kumar Gaurav Singh",
      rollNumber : "B170090",
      gpa : "7.5",
    },

  ])

  const [clicked, setClicked] = useState(false);
  const [active,setActive] =  useState("");

  /* to handle clicks on students */ 
  const handleCLick = (id) => {
    setActive(id);
    const clickState = !clicked;
    setClicked(clickState);
  };


  return (
    <div className = "studentsList">
      
        {
          students.map((student,index)=>
            <div className = "studentListItem" key={"student"+ index} 
              onClick = {()=>handleCLick(student.id)}>
            <div>
              <h2>{student.name}</h2>
              {clicked && (active === student.id) && <StudentDetail student = {student}/>}
            </div> 
             
            </div>
        )}
    </div>
  )
}

export default StudentList;