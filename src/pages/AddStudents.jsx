import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../Redux/slices/studentSlice";
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
        <div className="min-h-screen bg-[#F5F3FF] p-6 text-violet-900">
            {toast && <Toast message={toast.message} type={toast.type} />}

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
                        <h1 className="text-xl font-semibold">Add Student</h1>
                        <p className="text-xs text-amber-500 font-semibold tracking-widest uppercase">
                            Prestige Academy
                        </p>
                    </div>

                </div>

                {/* RIGHT SIDE BUTTON */}
                <button
                    onClick={() => navigate("/students")}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-medium shadow-md hover:opacity-90 transition"
                >
                    Student List
                </button>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-2xl border border-violet-200 p-6 shadow-sm">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div>
                        <label className={labelClass}>Full Name</label>
                        <input ref={nameRef} className={inputClass} placeholder="Student Name" required />
                    </div>

                    <div>
                        <label className={labelClass}>Father Name</label>
                        <input ref={fatherRef} className={inputClass} placeholder="Father Name" required />
                    </div>

                    <div>
                        <label className={labelClass}>Gender</label>
                        <select ref={genderRef} className={selectClass} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Rather Not to Say</option>
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>Date of Birth</label>
                        <input type="date" ref={dobRef} className={inputClass} required />
                    </div>

                    <div>
                        <label className={labelClass}>
                            Email <span className="text-violet-400 font-normal">(Optional)</span>
                        </label>
                        <input ref={emailRef} className={inputClass} placeholder="Email" />
                    </div>

                    <div>
                        <label className={labelClass}>Contact Number</label>
                        <input ref={contactRef} className={inputClass} placeholder="Contact Number" required />
                    </div>

                    <div>
                        <label className={labelClass}>Class</label>
                        <select ref={classRef} className={selectClass} required>
                            <option value="">Select Class</option>
                            {classes.map((c, i) => (
                                <option key={i}>{c}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>City</label>
                        <select ref={cityRef} className={selectClass} required>
                            <option value="">Select City</option>
                            {cities.map((c, i) => (
                                <option key={i}>{c}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-span-2">
                        <label className={labelClass}>Address</label>
                        <input ref={addressRef} className={inputClass} placeholder="Address" required />
                    </div>

                    <div>
                        <label className={labelClass}>B-Form / CNIC</label>
                        <input ref={cnicRef} className={inputClass} placeholder="B-Form / CNIC Number" required />
                    </div>

                    <div>
                        <label className={labelClass}>Profile Image</label>
                        <input type="file" ref={profileImageRef} className="file-input w-full bg-white border border-violet-200 rounded-xl shadow-sm file:bg-violet-600 file:text-white file:border-0 file:px-4 file:py-2" required />
                    </div>

                </div>
            </div>

            {/* BUTTON */}
            <div className="mt-6">
                <button
                    onClick={addStudentHandler}
                    disabled={isSubmitting}
                    className={`
        px-6 py-2 rounded-full
        bg-gradient-to-r from-violet-500 to-purple-500
        text-white font-medium
        shadow-[0_4px_14px_rgba(124,58,237,0.25)]
        transition-all duration-200
        ${isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02] hover:shadow-[0_6px_18px_rgba(124,58,237,0.35)]"}
    `}
                >
                    {isSubmitting ? "Adding..." : "Add Student"}
                </button>
            </div>

        </div>
    );
}

export default AddStudent;