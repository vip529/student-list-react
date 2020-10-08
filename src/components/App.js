import React from "react";
import StudentList from "./StudentList";
import "./styles.css";


const styles = {
  paperContainer: {
    backgroundImage:"linear-gradient(to right, #ad5389, #3c1053)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat : "no-repeat",
    backgroundAttachment: "fixed",
    backgroundOrigin: "center",
    padding: "24px",
    width:"100%",
    height: "100%",
    marginBottom: 0,
  }
};
const App = () => {
  return (
    <div className="App" style={styles.paperContainer}>
      <h1>Students List</h1>
      <StudentList/>
    </div>
  );
}

export default App;