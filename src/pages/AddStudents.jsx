import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent, deleteStudent } from "../Redux/slices/studentSlice";
import Toast from "../components/Toast";
import { useState, useEffect } from "react";


const AddStudent = () => {

    const [toast, setToast] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.students);

    const navigate = useNavigate();

    const nameRef = useRef();
    const genderRef = useRef();
    const dobRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();
    const fatherRef = useRef();
    const cityRef = useRef();
    const classRef = useRef();
    const addressRef = useRef();
    const cnicRef = useRef();
    const profileImageRef = useRef();

    const cities = [
        "Karachi", "Lahore", "Islamabad", "Hyderabad",
        "Faisalabad", "Multan", "Peshawar", "Quetta",
        "Sialkot", "Gujranwala",
    ];

    const classes = [
        "Nursery", "KG",
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];


    const inputClass = `input w-full bg-white border border-violet-200 text-violet-900 placeholder-violet-300
    focus:border-violet-500 focus:outline-none rounded-xl h-11 px-3 shadow-[0_1px_6px_rgba(124,58,237,0.06)] 
    transition-all duration-200`;

    const selectClass = `select w-full bg-white border border-violet-200 text-violet-900 focus:border-violet-500 
    focus:outline-none rounded-xl h-11 px-3 shadow-[0_1px_6px_rgba(124,58,237,0.06)]`;

    const labelClass = "text-violet-700 font-medium text-sm mb-1 block";



    const addStudentHandler = () => {

        // 🔹 VALIDATION
        if (
            !nameRef.current.value ||
            !fatherRef.current.value ||
            !genderRef.current.value ||
            !dobRef.current.value ||
            !contactRef.current.value ||
            !cityRef.current.value ||
            !classRef.current.value ||
            !addressRef.current.value ||
            !cnicRef.current.value ||
            !profileImageRef.current.files[0]
        ) {
            setToast({ message: "Please fill all required fields!", type: "error" });
            return;
        }

        setIsSubmitting(true);

        const studentData = {
            id: Date.now(),
            name: nameRef.current.value,
            fName: fatherRef.current.value,
            gender: genderRef.current.value,
            dob: dobRef.current.value,
            email: emailRef.current.value,
            contact: contactRef.current.value,
            city: cityRef.current.value,
            class: classRef.current.value,
            address: addressRef.current.value,
            cnic: cnicRef.current.value,
            picture: profileImageRef.current.files[0]
        };

        dispatch(addStudent(studentData));

        // ✅ SUCCESS TOAST
        setToast({ message: "Student added successfully!", type: "success" });

        // ✅ CLEAR FORM
        nameRef.current.value = "";
        fatherRef.current.value = "";
        genderRef.current.value = "";
        dobRef.current.value = "";
        emailRef.current.value = "";
        contactRef.current.value = "";
        cityRef.current.value = "";
        classRef.current.value = "";
        addressRef.current.value = "";
        cnicRef.current.value = "";
        profileImageRef.current.value = null;

        // simulate delay (optional UX)
        setTimeout(() => {
            setIsSubmitting(false);
        }, 500);
    };

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => {
                setToast(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    return (
        <div className="min-h-screen bg-[#F5F3FF] px-4 sm:px-6 py-4 text-violet-900">

            {toast && <Toast message={toast.message} type={toast.type} />}

            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

                {/* LEFT */}
                <div className="flex items-center gap-3">

                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`size-5 text-white`}>
                            <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>

                    <div>
                        <h1 className="text-lg sm:text-xl font-semibold">Add Student</h1>
                        <p className="text-[10px] sm:text-xs text-amber-500 font-semibold tracking-widest uppercase">
                            Prestige Academy
                        </p>
                    </div>

                </div>

                {/* BUTTON */}
                <button
                    onClick={() => navigate("/students")}
                    className="w-full sm:w-auto px-4 py-2 rounded-full 
            bg-gradient-to-r from-violet-500 to-purple-500 
            text-white text-sm font-medium shadow-md hover:scale-105 transition-all"
                >
                    Student List
                </button>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-2xl border border-violet-200 p-4 sm:p-6 shadow-sm">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

                    {/* INPUTS */}
                    <div>
                        <label className={labelClass}>Full Name</label>
                        <input ref={nameRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>Father Name</label>
                        <input ref={fatherRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>Gender</label>
                        <select ref={genderRef} className={selectClass}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>Date of Birth</label>
                        <input type="date" ref={dobRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>Email</label>
                        <input ref={emailRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>Contact</label>
                        <input ref={contactRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>Class</label>
                        <select ref={classRef} className={selectClass}>
                            <option value="">Select Class</option>
                            {classes.map((c, i) => <option key={i}>{c}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>City</label>
                        <select ref={cityRef} className={selectClass}>
                            <option value="">Select City</option>
                            {cities.map((c, i) => <option key={i}>{c}</option>)}
                        </select>
                    </div>

                    {/* FIXED RESPONSIVE SPAN */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <label className={labelClass}>Address</label>
                        <input ref={addressRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>CNIC</label>
                        <input ref={cnicRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>Profile Image</label>
                        <input type="file" ref={profileImageRef}
                            className="file-input w-full bg-white border border-violet-200 rounded-xl shadow-sm file:bg-violet-600 file:text-white" />
                    </div>

                </div>
            </div>

            {/* BUTTON */}
            <div className="mt-6">
                <button
                    onClick={addStudentHandler}
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-6 py-2 rounded-full
            bg-gradient-to-r from-violet-500 to-purple-500 hover:scale-105
            transition-all text-white font-medium shadow-md
            ${isSubmitting ? "opacity-50" : ""}`}
                >
                    {isSubmitting ? "Adding..." : "Add Student"}
                </button>
            </div>

        </div>
    );
}

export default AddStudent;