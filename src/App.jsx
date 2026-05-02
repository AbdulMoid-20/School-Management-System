
import { Routes, Route } from "react-router-dom"
import { Login, Dashboard, AddStudent ,AddTeacher , StudentList , TeacherstList} from "./pages"
import Layout from "./components/Layout"

function App() {

  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Layout/>} >
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="addstudent" element={<AddStudent/>} />
        <Route path="addteacher" element={<AddTeacher/>} />
        <Route path="teachers" element={<TeacherstList/>} />
        <Route path="students" element={<StudentList/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
