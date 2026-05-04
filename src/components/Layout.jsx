import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/slices/authSlice";

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showNewRecordModal, setShowNewRecordModal] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const handleNavigate = (path) => {
        navigate(path);

        if (window.innerWidth < 1024) {
            setSidebarOpen(false);
        }
    };

    const handleLogout = () => {
        dispatch(logout());
        setSidebarOpen(false);

        navigate("/login", {
            state: { message: "Logged out successfully", type: "error" },
        });
    };

    const isActive = (path) => location.pathname.includes(path);

    const handleAddNewRecord = (type) => {
        setShowNewRecordModal(false);
        if (type === 'student') {
            navigate('/addstudent');
        } else if (type === 'teacher') {
            navigate('/addteacher');
        }
    };

    return (
        <div className="h-dvh overflow-hidden bg-[#F5F3FF] text-violet-900 relative">
            <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
                <div className="absolute w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-violet-200/60 blur-[100px] sm:blur-[140px] rounded-full top-[-90px] left-[-120px]" />
                <div className="absolute w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-amber-100/80 blur-[90px] sm:blur-[120px] rounded-full bottom-[-100px] right-[-120px]" />
                <div className="absolute w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-purple-100/60 blur-[80px] sm:blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* NEW RECORD MODAL */}
            {showNewRecordModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4" onClick={() => setShowNewRecordModal(false)}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 border border-violet-100" onClick={(e) => e.stopPropagation()}>

                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-violet-900">Add New Record</h3>
                                <p className="text-sm text-violet-500 mt-1">Choose what you want to add</p>
                            </div>
                            <button
                                onClick={() => setShowNewRecordModal(false)}
                                className="btn btn-sm btn-circle btn-ghost text-violet-400 hover:bg-violet-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Options */}
                        <div className="space-y-3">

                            {/* Add Student */}
                            <button
                                onClick={() => handleAddNewRecord('student')}
                                className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-violet-200 hover:border-violet-400 hover:bg-violet-50 transition-all duration-200 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-violet-100 group-hover:bg-violet-200 flex items-center justify-center flex-shrink-0 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-violet-600">
                                        <path d="M17 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M7 21v-2a4 4 0 0 1 3-3.87"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="text-left flex-1">
                                    <div className="font-semibold text-violet-900 text-base">Add New Student</div>
                                    <div className="text-sm text-violet-500">Register a new student</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-violet-400 group-hover:text-violet-600 transition-colors">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>

                            {/* Add Teacher */}
                            <button
                                onClick={() => handleAddNewRecord('teacher')}
                                className="w-full flex items-center gap-4 p-4 rounded-xl border-2 border-amber-200 hover:border-amber-400 hover:bg-amber-50 transition-all duration-200 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-amber-100 group-hover:bg-amber-200 flex items-center justify-center flex-shrink-0 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-amber-600">
                                        <circle cx="12" cy="7" r="4"></circle>
                                        <path d="M5.5 21a6.5 6.5 0 0 1 13 0"></path>
                                    </svg>
                                </div>
                                <div className="text-left flex-1">
                                    <div className="font-semibold text-violet-900 text-base">Add New Teacher</div>
                                    <div className="text-sm text-violet-500">Register a new faculty member</div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-amber-400 group-hover:text-amber-600 transition-colors">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>

                        </div>

                    </div>
                </div>
            )}

            <div className="flex h-dvh min-w-0">
                {sidebarOpen && (
                    <button
                        type="button"
                        aria-label="Close sidebar overlay"
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 z-40 bg-black/35 lg:hidden"
                    />
                )}

                <aside
                    className={`fixed lg:static inset-y-0 left-0 z-50 flex h-dvh flex-col bg-white border-r border-violet-200 shadow-[2px_0_12px_rgba(124,58,237,0.06)] transition-all duration-300
                    ${sidebarOpen
                            ? "translate-x-0 w-72 max-w-[85vw] lg:w-64"
                            : "-translate-x-full lg:translate-x-0 lg:w-14"
                        }`}
                >
                    <div
                        className={`w-full px-3 py-5 border-b border-violet-100 flex items-center gap-3 ${sidebarOpen ? "" : "lg:justify-center"
                            }`}
                    >
                        <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(124,58,237,0.3)]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-5">
                                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 4a2 2 0 110 4 2 2 0 010-4zm0 12c-2.67 0-5.01-1.37-6.4-3.44C7.04 13.06 9.4 12 12 12s4.96 1.06 6.4 2.56C16.01 16.63 13.67 18 12 18z" />
                            </svg>
                        </div>

                        <div className={`${sidebarOpen ? "block" : "hidden"}`}>
                            <div className="text-sm font-bold text-violet-900 tracking-wide">Prestige</div>
                            <div className="text-[10px] text-amber-500 tracking-[0.15em] uppercase font-semibold">Academy</div>
                        </div>
                    </div>

                    <ul className="menu w-full grow mt-2 px-1.5 gap-1 ">
                        <li>
                            <button
                                onClick={() => handleNavigate("dashboard")}
                                className={`${!sidebarOpen ? "tooltip tooltip-right" : ""} transition-all duration-200 ${isActive("dashboard")
                                    ? "bg-violet-100 text-violet-800 border-l-2 border-amber-400 rounded-r-lg font-medium"
                                    : "text-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                    }`}
                                data-tip="Dashboard"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`size-5 ${isActive("dashboard") ? "text-amber-500" : "text-violet-400"}`}>
                                    <rect x="3" y="3" width="7" height="6" />
                                    <rect x="14" y="3" width="7" height="9" />
                                    <rect x="14" y="16" width="7" height="6" />
                                    <rect x="3" y="13" width="7" height="9" />
                                </svg>
                                <span className={`${sidebarOpen ? "inline" : "hidden"}`}>Dashboard</span>
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleNavigate("teachers")}
                                className={`${!sidebarOpen ? "tooltip tooltip-right" : ""} transition-all duration-200 ${isActive("teachers")
                                    ? "bg-violet-100 text-violet-800 border-l-2 border-amber-400 rounded-r-lg font-medium"
                                    : "text-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                    }`}
                                data-tip="Teachers"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" className={`size-5 ${isActive("teachers") ? "text-amber-500" : "text-violet-400"}`}>
                                    <circle cx="12" cy="7" r="4" />
                                    <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
                                </svg>
                                <span className={`${sidebarOpen ? "inline" : "hidden"}`}>Teachers</span>
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleNavigate("students")}
                                className={`${!sidebarOpen ? "tooltip tooltip-right" : ""} transition-all duration-200 ${isActive("students")
                                    ? "bg-violet-100 text-violet-800 border-l-2 border-amber-400 rounded-r-lg font-medium"
                                    : "text-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                    }`}
                                data-tip="Students"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`size-5 ${isActive("students") ? "text-amber-500" : "text-violet-400"}`}>
                                    <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                                <span className={`${sidebarOpen ? "inline" : "hidden"}`}>Students</span>
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleNavigate("classes")}
                                className={`${!sidebarOpen ? "tooltip tooltip-right" : ""} transition-all duration-200 ${isActive("classes")
                                    ? "bg-violet-100 text-violet-800 border-l-2 border-amber-400 rounded-r-lg font-medium"
                                    : "text-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                    }`}
                                data-tip="Classes"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" className={`size-5 ${isActive("classes") ? "text-amber-500" : "text-violet-400"}`}>
                                    <path d="M4 19.5V4a2 2 0 0 1 2-2h12" />
                                    <path d="M18 2v20" />
                                    <path d="M4 19.5a2 2 0 0 0 2 2h12" />
                                </svg>
                                <span className={`${sidebarOpen ? "inline" : "hidden"}`}>Classes</span>
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleNavigate("setting")}
                                className={`${!sidebarOpen ? "tooltip tooltip-right" : ""} transition-all duration-200 ${isActive("setting")
                                    ? "bg-violet-100 text-violet-800 border-l-2 border-amber-400 rounded-r-lg font-medium"
                                    : "text-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                    }`}
                                data-tip="Settings"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`size-5 ${isActive("setting") ? "text-amber-500" : "text-violet-400"}`}>
                                    <path d="M20 7h-9" />
                                    <path d="M14 17H5" />
                                    <circle cx="17" cy="17" r="3" />
                                    <circle cx="7" cy="7" r="3" />
                                </svg>
                                <span className={`${sidebarOpen ? "inline" : "hidden"}`}>Settings</span>
                            </button>
                        </li>

                        <li className="mt-auto pt-4 border-t border-violet-100">
                            <button
                                onClick={handleLogout}
                                className={`${!sidebarOpen ? "tooltip tooltip-right" : ""} text-red-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200`}
                                data-tip="Logout"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 text-red-400">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" y1="12" x2="9" y2="12" />
                                </svg>
                                <span className={`${sidebarOpen ? "inline" : "hidden"}`}>Logout</span>
                            </button>
                        </li>
                    </ul>
                </aside>

                <main className="flex min-w-0 flex-1 flex-col h-dvh">
                    <nav className="navbar w-full shrink-0 bg-white border-b border-violet-200 px-3 sm:px-6 min-h-16 h-auto gap-2">
                        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4">
                            <button
                                type="button"
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="btn btn-square btn-ghost text-violet-500"
                                aria-label="Toggle sidebar"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M9 3v18" />
                                </svg>
                            </button>

                            <h1 className="min-w-0 truncate text-sm sm:text-lg font-semibold leading-tight">
                                Good morning, <span className="font-bold">Principal Ahmed</span>
                            </h1>
                        </div>

                        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                            <span className="hidden sm:inline-flex px-4 py-1 rounded-full bg-violet-100 text-violet-600 text-sm whitespace-nowrap">
                                {new Date().toLocaleDateString("en-US", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                })}
                            </span>

                            <button
                                onClick={() => setShowNewRecordModal(true)}
                                className="hidden sm:inline-flex  transition-all px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-medium whitespace-nowrap hover:shadow-lg hover:scale-105 transition-all duration-200"
                            >
                                + New Record
                            </button>

                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-violet-500 flex items-center justify-center text-white shrink-0">
                                👤
                            </div>
                        </div>
                    </nav>

                    <div className="bg-[#F5F3FF] flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;