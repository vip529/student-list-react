import React from "react";

/*
 *Component to render a particular student's detail.
 * @props: student - store a student's detail.
 */
const StudentDetail = ({student = {}}) => {
  return (
    <>
        <div className="studentDetailContainer right-container">
          <div>
            <h4>Roll No. : </h4>
            <span>{student.rollNumber}</span>
          </div>

          <div>
            <h4>GPA : </h4>
            <span>{student.gpa}</span>
          </div>
          <div>
            <h4>Hobby : </h4>
            <span>{student.hobbies}</span>
          </div>

          <div>
            <h4>About Me : </h4>
            <span>{student.aboutMe}</span>
          </div>
        </div>
    </>
  );
};


export default StudentDetail;
