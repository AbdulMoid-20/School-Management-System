import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Dashboard, AddStudent, AddTeacher, StudentList, TeacherstList } from "./pages";
import Layout from "./components/Layout";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Routes>

      {/* LOGIN */}
      <Route path="/login" element={<Login />} />

      {/* PROTECTED */}
      <Route
        path="/"
        element={
          isLoggedIn
            ? <Layout/>
            : <Navigate to="/login" replace />
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="addstudent" element={<AddStudent />} />
        <Route path="addteacher" element={<AddTeacher />} />
        <Route path="teachers" element={<TeacherstList />} />
        <Route path="students" element={<StudentList />} />
      </Route>

      {/* FALLBACK */}
      <Route path="*" element={<Navigate to="/login" replace />} />

    </Routes>
  );
}

export default App;