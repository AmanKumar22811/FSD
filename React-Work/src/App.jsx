import "./App.css";
import Student from "./components/Student/Student";
import StudentState from "./components/studentState/StudentState";

function App() {
  const data = [
    { name: "Aman", rollno: "15", branch: "CSE" },
    { name: "Aman2", rollno: "16", branch: "CSE" },
    { name: "Aman3", rollno: "17", branch: "CSE" },
  ];
  return (
    <>
      {/* <div style={{ display: "flex" }}>
        <Student data={data[0]} />
        <Student data={data[1]} />
        <Student data={data[2]} />

      </div> */}
      <div>
        <StudentState />
      </div>
    </>
  );
}

export default App;
