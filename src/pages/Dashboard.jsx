import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Toast from "../components/Toast";

const Dashboard = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [toast, setToast] = useState(null);

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => setToast(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    useEffect(() => {
        if (location.state?.message) {
            setToast(location.state);
            navigate(location.pathname, { replace: true });
        }
    }, [location.state]);

    return (
        <div className="min-h-screen bg-[#F5F3FF] px-4 sm:px-6 lg:px-8 py-4 text-[#2E1065]">

            {toast && <Toast message={toast.message} type={toast.type} />}

            {/* ================= CARDS ================= */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">

                {/* Students */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-violet-200 shadow-sm">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-violet-100 flex items-center justify-center mb-2 sm:mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 sm:size-5 text-violet-800" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M16 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M8 21v-2a4 4 0 0 1 3-3.87"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-violet-950">1,248</h2>
                    <p className="text-xs sm:text-sm text-violet-800 font-semibold">Students</p>
                    <p className="text-[10px] sm:text-xs text-violet-600 mt-1 font-medium">+12 this term</p>
                </div>

                {/* Faculty */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-violet-200 shadow-sm">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-2 sm:mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 sm:size-5 text-amber-800" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 10L12 5 2 10l10 5 10-5z"></path>
                            <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-amber-950">87</h2>
                    <p className="text-xs sm:text-sm text-amber-800 font-semibold">Faculty</p>
                    <p className="text-[10px] sm:text-xs text-amber-600 mt-1 font-medium">3 on leave</p>
                </div>

                {/* Attendance */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-violet-200 shadow-sm">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-violet-100 flex items-center justify-center mb-2 sm:mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 sm:size-5 text-violet-800" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-violet-950">94%</h2>
                    <p className="text-xs sm:text-sm text-violet-800">Attendance</p>
                    <p className="text-[10px] sm:text-xs text-violet-600 mt-1 font-medium">+2% vs last week</p>
                </div>

                {/* Grade */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-violet-200 shadow-sm">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-100 flex items-center justify-center mb-2 sm:mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 sm:size-5 text-amber-800" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                        </svg>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-amber-950">76%</h2>
                    <p className="text-xs sm:text-sm text-amber-800">Avg. grade</p>
                    <p className="text-[10px] sm:text-xs text-amber-600 mt-1 font-medium">B+ average</p>
                </div>

            </div>

            {/* ================= LOWER SECTION ================= */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

                {/* TOP CLASSES */}
                <div className="bg-white border border-violet-200 rounded-2xl p-4 sm:p-6 shadow-sm">
                    <h2 className="font-bold text-lg sm:text-2xl text-violet-950 mb-4 sm:mb-6">
                        Top performing classes
                    </h2>

                    {[
                        { label: "10A", name: "Grade 10 — Section A", percent: 92 },
                        { label: "8B", name: "Grade 8 — Section B", percent: 88 },
                        { label: "11C", name: "Grade 11 — Section C", percent: 85 },
                        { label: "7A", name: "Grade 7 — Section A", percent: 81 },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">

                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-violet-100 text-violet-800 flex items-center justify-center text-xs sm:text-sm font-semibold">
                                {item.label}
                            </div>

                            <div className="flex-1">
                                <p className="text-xs sm:text-sm font-medium text-violet-950">
                                    {item.name}
                                </p>

                                <div className="flex items-center gap-2 sm:gap-3 mt-1 sm:mt-2">
                                    <div className="w-full h-2 bg-violet-100 rounded-full">
                                        <div className="h-2 bg-purple-700 rounded-full" style={{ width: `${item.percent}%` }} />
                                    </div>
                                    <span className="text-xs sm:text-sm text-violet-600 font-medium">
                                        {item.percent}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* EVENTS */}
                <div className="bg-white border border-violet-200 rounded-2xl p-4 sm:p-6 shadow-sm">
                    <h2 className="font-bold text-lg sm:text-2xl text-violet-950 mb-4 sm:mb-6">
                        Upcoming Events
                    </h2>

                    {[
                        { title: "Science Fair", date: "May 12 · Hall A", days: "6 days", color: "bg-amber-100 text-amber-900", bar: "bg-amber-400" },
                        { title: "Term exams", date: "May 20 – Jun 3", days: "19 days", color: "bg-violet-100 text-violet-800", bar: "bg-violet-800" },
                        { title: "Parent-teacher day", date: "Jun 7 · All sections", days: "37 days", color: "bg-violet-100 text-violet-800", bar: "bg-violet-400" },
                        { title: "Summer break", date: "Jun 20 · School close", days: "50 days", color: "bg-amber-100 text-amber-900", bar: "bg-amber-400" },
                    ].map((event, i) => (
                        <div key={i} className="flex justify-between items-center mb-4 sm:mb-6">

                            <div className="flex items-start gap-2 sm:gap-3">
                                <div className={`w-1 h-8 sm:h-10 rounded-full ${event.bar}`}></div>

                                <div>
                                    <p className="text-sm sm:text-base font-medium text-violet-950">
                                        {event.title}
                                    </p>
                                    <p className="text-[10px] sm:text-xs text-violet-800 font-semibold">
                                        {event.date}
                                    </p>
                                </div>
                            </div>

                            <span className={`px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${event.color}`}>
                                {event.days}
                            </span>

                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Dashboard;