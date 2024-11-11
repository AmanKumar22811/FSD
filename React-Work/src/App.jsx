import "./App.css";
import Student from "./components/Student/Student";

function App() {
  const data = { name: "Aman", rollno: "15", branch: "CSE" };
  return (
    <>
      <div className="college-header">
        ABES Engineering College
      </div>
      <Student name={data.name} rollno={data.rollno} branch={data.branch} />
    </>
  );
}

export default App;
