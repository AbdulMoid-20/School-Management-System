import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteStudent } from "../Redux/slices/studentSlice";

const StudentList = () => {

    const students = useSelector((state) => state.students.students);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteStudent(id));
    };

    return (
        <div className="p-6">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">

                {/* LEFT SIDE (icon + title grouped) */}
                <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="size-5 text-white"
                            fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>

                    <div>
                        <h1 className="text-xl font-semibold">Students List</h1>
                        <p className="text-xs text-amber-500 font-semibold tracking-widest uppercase">
                            Prestige Academy
                        </p>
                    </div>

                </div>

                {/* RIGHT SIDE BUTTON */}
                <button
                    onClick={() => navigate("/addstudent")}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-medium shadow-md hover:opacity-90 transition"
                >
                   + Add New Student
                </button>

            </div>

            {/* 🔹 TABLE */}
            <div className="bg-white border border-violet-200 rounded-2xl shadow-sm p-4 overflow-x-auto">

                <table className="table w-full">

                    {/* HEAD */}
                    <thead className="bg-violet-50 text-violet-700 text-sm">
                        <tr>
                            <th>
                                <input type="checkbox" className="checkbox checkbox-sm border-violet-300" />
                            </th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Contact</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="text-violet-900">

                        {students.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center py-6">
                                    No students found
                                </td>
                            </tr>
                        ) : (
                            students.map((student, index) => (
                                <tr key={student.id} className="hover:bg-violet-50 transition">

                                    <th>
                                        <input type="checkbox" className="checkbox checkbox-sm border-violet-300" />
                                    </th>

                                    {/* NAME + IMAGE */}
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12 border border-violet-200">
                                                    <img
                                                        src={
                                                            student.picture
                                                                ? URL.createObjectURL(student.picture)
                                                                : "https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        }
                                                        alt="student"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <div className="font-semibold">{student.name}</div>
                                                <div className="text-xs text-violet-400">
                                                    {student.city}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    {/* FATHER NAME + CLASS */}
                                    <td>
                                        {student.fName}
                                        <br />
                                        <span className="badge bg-violet-100 text-violet-600 border-0 text-xs">
                                            Class {student.class}
                                        </span>
                                    </td>

                                    {/* CONTACT */}
                                    <td>{student.contact}</td>

                                    {/* ACTIONS */}
                                    <td className="flex gap-2">

                                        {/* EDIT */}
                                        <button
                                            className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                                            onClick={() => alert("Edit feature coming next")}
                                        >
                                            Edit
                                        </button>

                                        {/* DELETE */}
                                        <button
                                            className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                                            onClick={() => handleDelete(student.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>
                            ))
                        )}

                    </tbody>

                    {/* FOOT
                    <tfoot className="text-violet-500 text-xs">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Father Name</th>
                            <th>Contact</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default StudentList;