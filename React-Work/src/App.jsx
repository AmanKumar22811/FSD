import { useState } from "react";
import "./App.css";
import ImageManipulation from "./components/imageManipulation";
import Student from "./components/Student/Student";
import StudentState from "./components/studentState/StudentState";
import Login from "./Login";
import Registration from "./Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
function App() {
  // const data = [
  //   { name: "Aman", rollno: "15", branch: "CSE" },
  //   { name: "Aman2", rollno: "16", branch: "CSE" },
  //   { name: "Aman3", rollno: "17", branch: "CSE" },
  // ];
  // const [rData, setRdata] = useState();
  return (
    <>
      {/* <div style={{ display: "flex" }}>
        <Student data={data[0]} />
        <Student data={data[1]} />
        <Student data={data[2]} />

      </div> */}
      {/* <div>
        <StudentState />
      </div>
      <ImageManipulation /> */}
      {/* <Login loginData={rData} />
      {JSON.stringify(rData)}
      <Registration regData={setRdata} /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
