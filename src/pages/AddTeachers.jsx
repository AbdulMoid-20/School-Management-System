import { useRef , useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import Toast from "../components/Toast";

const AddTeacher = () => {
    const [toast, setToast] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();

    const nameRef = useRef();
    const genderRef = useRef();
    const dobRef = useRef();
    const cityRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();
    const subjectRef = useRef();
    const addressRef = useRef();
    const cnicRef = useRef();
    const qualRef = useRef();
    const profileImageRef = useRef();

    const cities = [
        "Karachi", "Lahore", "Islamabad", "Hyderabad", "Faisalabad",
        "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala",
    ];

    const qualification = [
        "Matriculation",
        "Intermediate",
        "Bachelor's",
        "Master's",
        "M.Phil",
        "PhD",
    ];

    const subjects = [
        'Urdu',
        'Maths',
        'English',
        'Science',
        'History',
        'Geography',
        'Islamiyat',
        'Physcis',
        'Chemistry',
        'Computer Science',
        'Biology',
        'Physical Education / Games',
    ];

    const inputClass = `
    input w-full bg-white border border-violet-200 text-violet-900 
    placeholder-violet-300 focus:border-violet-500 focus:outline-none
    rounded-xl h-11 px-3 shadow-[0_1px_6px_rgba(124,58,237,0.06)]
    transition-all duration-200`;

    const selectClass = `
    select w-full bg-white border border-violet-200 text-violet-900 
    focus:border-violet-500 focus:outline-none
    rounded-xl h-11 px-3 shadow-[0_1px_6px_rgba(124,58,237,0.06)]`;

    const labelClass = "text-violet-700 font-medium text-sm mb-1 block";

    const addTeacherHandler = () => {
        // 🔹 VALIDATION
        if (
            !nameRef.current.value ||
            !genderRef.current.value ||
            !dobRef.current.value ||
            !cityRef.current.value ||
            !emailRef.current.value ||
            !contactRef.current.value ||
            !subjectRef.current.value ||
            !addressRef.current.value ||
            !cnicRef.current.value ||
            !qualRef.current.value
        ) {
            setToast({ type: "error", message: "Please fill in all required fields." });
            return;
        }

        // 🔹 DISPATCH ACTION
        dispatch({
            type: "ADD_TEACHER",
            payload: {
                name: nameRef.current.value,
                gender: genderRef.current.value,
                dob: dobRef.current.value,
                city: cityRef.current.value,
                email: emailRef.current.value,
                contact: contactRef.current.value,
                subject: subjectRef.current.value,
                address: addressRef.current.value,
                cnic: cnicRef.current.value,
                qualification: qualRef.current.value,
                profileImage: profileImageRef.current.files[0],
            },
        });
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


            {/* HEADER (MATCHED) */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">

                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="size-4 sm:size-5 text-white"
                            fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </div>

                    <div>
                        <h1 className="text-lg sm:text-xl font-semibold">Add Teacher</h1>
                        <p className="text-[10px] sm:text-xs text-amber-500 font-semibold tracking-widest uppercase">
                            Prestige Academy
                        </p>
                    </div>
                </div>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-2xl border border-violet-200 p-4 sm:p-6 shadow-sm">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">

                    <div>
                        <label className={labelClass}>Full Name</label>
                        <input ref={nameRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>Gender</label>
                        <select ref={genderRef} className={selectClass}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Rather Not to Say</option>
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>Date of Birth</label>
                        <input type="date" ref={dobRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>City</label>
                        <select ref={cityRef} className={selectClass}>
                            <option value="">Select City</option>
                            {cities.map((city, i) => (
                                <option key={i}>{city}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>Email</label>
                        <input ref={emailRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>Contact Number</label>
                        <input ref={contactRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>Subject</label>
                        <select ref={subjectRef} className={selectClass}>
                            <option value="">Select Subject</option>
                            {subjects.map((c, i) => (
                                <option key={i}>{c}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className={labelClass}>Qualification</label>
                        <select ref={qualRef} className={selectClass}>
                            <option value="">Select Qualification</option>
                            {qualification.map((c, i) => (
                                <option key={i}>{c}</option>
                            ))}
                        </select>
                    </div>

                    {/* RESPONSIVE FIX */}
                    <div className="sm:col-span-2 lg:col-span-2">
                        <label className={labelClass}>Address</label>
                        <input ref={addressRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>CNIC Number</label>
                        <input ref={cnicRef} className={inputClass} />
                    </div>

                    <div>
                        <label className={labelClass}>Profile Image</label>
                        <input
                            type="file"
                            ref={profileImageRef}
                            className="file-input w-full bg-white border border-violet-200 rounded-xl shadow-sm file:bg-violet-600 file:text-white"
                        />
                    </div>

                </div>
            </div>

            {/* BUTTON (MATCHED) */}
            <div className="mt-6">
                <button
                    onClick={addTeacherHandler}
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto px-6 py-2 rounded-full
            bg-gradient-to-r from-violet-500 to-purple-500 hover:scale-105
            transition-all text-white font-medium shadow-md
            ${isSubmitting ? "opacity-50" : ""}`}
                >
                    {isSubmitting ? "Adding..." : "Add Teacher"}
                </button>
            </div>

        </div>
    );
};

export default AddTeacher;