import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../Redux/slices/studentSlice";

const AddTeacher = () => {
    const [gender, setgender] = useState('')
    const dispatch = useDispatch();

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
        "Karachi", "Lahore", "Islamabad", "Hyderabad", "Faisalabad",
        "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala",
    ];

    const classes = [
        "Nursery", "KG", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ];

    const inputClass = `
input w-full bg-white border border-violet-200 text-violet-900 
placeholder-violet-300 focus:border-violet-500 focus:outline-none
rounded-xl h-11 px-3
shadow-[0_1px_6px_rgba(124,58,237,0.06)]
`;

    const selectClass = `
select w-full bg-white border border-violet-200 text-violet-900 
focus:border-violet-500 focus:outline-none
rounded-xl h-11 px-3
shadow-[0_1px_6px_rgba(124,58,237,0.06)]
`;

    const labelClass = "text-violet-700 font-medium text-sm mb-1 block";

    return (
        <div className="min-h-screen bg-[#F5F3FF] p-6 text-violet-900">

            {/* HEADER */}
            <div className="flex items-center gap-3 mb-6">

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
                    <h1 className="text-xl font-semibold">Add Teacher</h1>
                    <p className="text-xs text-amber-500 font-semibold tracking-widest uppercase">
                        Prestige Academy
                    </p>
                </div>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-2xl border border-violet-200 p-6 shadow-sm">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div>
                        <label className={labelClass}>Full Name</label>
                        <input ref={nameRef} className={inputClass} placeholder="Teacher Name" />
                    </div>

                    <div>
                        <label className={labelClass}>Father Name</label>
                        <input ref={fatherRef} className={inputClass} placeholder="Father Name" />
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
                        <label className={labelClass}>Email</label>
                        <input ref={emailRef} className={inputClass} placeholder="Email" />
                    </div>

                    <div>
                        <label className={labelClass}>Contact Number</label>
                        <input ref={contactRef} className={inputClass} placeholder="Contact Number" />
                    </div>

                    <div>
                        <label className={labelClass}>Subject</label>
                        <select ref={classRef} className={selectClass}>
                            <option value="">Select Subject</option>
                            {classes.map((c, i) => (
                                <option key={i}>{c}</option>
                            ))}
                        </select>
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

                    <div className="col-span-2">
                        <label className={labelClass}>Address</label>
                        <input ref={addressRef} className={inputClass} placeholder="Address" />
                    </div>

                    <div>
                        <label className={labelClass}>CNIC Number</label>
                        <input ref={cnicRef} className={inputClass} placeholder="CNIC Number" />
                    </div>

                    <div>
                        <label className={labelClass}>Profile Image</label>
                        <input
                            type="file"
                            ref={profileImageRef}
                            className="file-input w-full bg-white border border-violet-200 rounded-xl shadow-sm
                        file:bg-violet-600 file:text-white file:border-0 file:px-4 file:py-2"
                        />
                    </div>

                </div>
            </div>

            {/* BUTTON */}
            <div className="mt-6">
                <button
                    className="
                px-6 py-2 rounded-full
                bg-gradient-to-r from-violet-500 to-purple-500
                text-white font-medium
                shadow-[0_4px_14px_rgba(124,58,237,0.25)]
                hover:shadow-[0_6px_18px_rgba(124,58,237,0.35)]
                hover:scale-[1.02]
                transition-all duration-200
                "
                    onClick={() => console.log(genderRef.current.value)}
                >
                    Add Teacher
                </button>
            </div>

        </div>
    );
}

export default AddTeacher;