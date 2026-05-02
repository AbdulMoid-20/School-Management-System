import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from '../Redux/slices/authSlice'

const Layout = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login', {
            state: { message: "Logged out successfully", type: "error" }
        });
    };

    const isActive = (path) => location.pathname.includes(path);

    return (
        <div className="drawer lg:drawer-open h-screen overflow-hidden bg-[#F5F3FF] text-violet-900 relative">

            {/* ✨ Light Purple & Gold Glow Background */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute w-[500px] h-[500px] bg-violet-200/60 blur-[140px] rounded-full top-[-120px] left-[-120px]"></div>
                <div className="absolute w-[400px] h-[400px] bg-amber-100/80 blur-[120px] rounded-full bottom-[-100px] right-[-100px]"></div>
                <div className="absolute w-[300px] h-[300px] bg-purple-100/60 blur-[100px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            {/* MAIN CONTENT */}
            <div className="drawer-content flex flex-col h-screen">

                {/* NAVBAR */}
                <nav className="navbar w-full bg-white border-b border-violet-200 px-6 h-19 flex items-center">

                    {/* LEFT */}
                    <div className="flex items-center gap-4">

                        <label htmlFor="my-drawer-4" className="btn btn-square btn-ghost text-violet-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                stroke="currentColor" fill="none" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round"
                                className="size-4">
                                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                                <path d="M9 3v18"></path>
                            </svg>
                        </label>

                        <h1 className="text-lg font-semibold">
                            Good morning, <span className="font-bold">Principal Ahmed</span>
                        </h1>

                    </div>

                    {/* RIGHT */}
                    <div className="ml-auto flex items-center gap-3">

                        <span className="px-4 py-1 rounded-full bg-violet-100 text-violet-600 text-sm">
                            May 1, 2026
                        </span>

                        <button className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-medium">
                            + New Record
                        </button>

                        <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center text-white">
                            👤
                        </div>

                    </div>
                </nav>

                {/* Page content */}
                <div className="bg-[#F5F3FF] flex-1 overflow-y-auto">
                    <Outlet />
                </div>
            </div>

            {/* SIDEBAR */}
            <div className="drawer-side is-drawer-close:overflow-visible bg-[#F5F3FF] ">
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                <div className="flex h-screen flex-col items-start bg-white border-r border-violet-200 shadow-[2px_0_12px_rgba(124,58,237,0.06)] is-drawer-close:w-14 is-drawer-open:w-64">

                    {/* Sidebar branding */}
                    <div className="w-full px-4 py-5 border-b border-violet-100 flex items-center gap-3 is-drawer-close:justify-center">
                        <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(124,58,237,0.3)]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-5">
                                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 4a2 2 0 110 4 2 2 0 010-4zm0 12c-2.67 0-5.01-1.37-6.4-3.44C7.04 13.06 9.4 12 12 12s4.96 1.06 6.4 2.56C16.01 16.63 13.67 18 12 18z" />
                            </svg>
                        </div>
                        <div className="is-drawer-close:hidden">
                            <div className="text-sm font-bold text-violet-900 tracking-wide">Prestige</div>
                            <div className="text-[10px] text-amber-500 tracking-[0.15em] uppercase font-semibold">Academy</div>
                        </div>
                    </div>

                    <ul className="menu w-full grow mt-2 px-1.5 gap-1">

                        {/* DASHBOARD */}
                        <li>
                            <button
                                onClick={() => navigate("dashboard")}
                                className={`is-drawer-close:tooltip is-drawer-close:tooltip-right transition-all duration-200 ${isActive("dashboard")
                                        ? "bg-violet-100 text-violet-800 border-l-2 border-amber-400 rounded-r-lg font-medium"
                                        : "text-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                    }`}
                                data-tip="Dashboard"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    stroke="currentColor" fill="none" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className={`size-5 ${isActive("dashboard") ? "text-amber-500" : "text-violet-400"}`}>
                                    <rect x="3" y="3" width="7" height="6"></rect>
                                    <rect x="14" y="3" width="7" height="9"></rect>
                                    <rect x="14" y="16" width="7" height="6"></rect>
                                    <rect x="3" y="13" width="7" height="9"></rect>
                                </svg>
                                <span className="is-drawer-close:hidden">Dashboard</span>
                            </button>
                        </li>

                        {/* TEACHERS */}
                        <li>
                            <button
                                onClick={() => navigate("teachers")}
                                className={`is-drawer-close:tooltip is-drawer-close:tooltip-right transition-all duration-200 ${isActive("teachers")
                                        ? "bg-violet-100 text-violet-800 border-l-2 border-amber-400 rounded-r-lg font-medium"
                                        : "text-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                    }`}
                                data-tip="Teachers"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    stroke="currentColor" fill="none" strokeWidth="2"
                                    className={`size-5 ${isActive("teachers") ? "text-amber-500" : "text-violet-400"}`}>
                                    <circle cx="12" cy="7" r="4"></circle>
                                    <path d="M5.5 21a6.5 6.5 0 0 1 13 0"></path>
                                </svg>
                                <span className="is-drawer-close:hidden">Teachers</span>
                            </button>
                        </li>

                        {/* STUDENTS */}
                        <li>
                            <button
                                onClick={() => navigate("students")}
                                className={`is-drawer-close:tooltip is-drawer-close:tooltip-right transition-all duration-200 ${isActive("students")
                                        ? "bg-violet-100 text-violet-800 border-l-2 border-amber-400 rounded-r-lg font-medium"
                                        : "text-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                    }`}
                                data-tip="Students"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    stroke="currentColor" fill="none" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className={`size-5 ${isActive("students") ? "text-amber-500" : "text-violet-400"}`}>
                                    <path d="M17 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M7 21v-2a4 4 0 0 1 3-3.87"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                                <span className="is-drawer-close:hidden">Students</span>
                            </button>
                        </li>

                        {/* CLASSES */}
                        <li>
                            <button
                                onClick={() => navigate("classes")}
                                className={`is-drawer-close:tooltip is-drawer-close:tooltip-right transition-all duration-200 ${isActive("classes")
                                        ? "bg-violet-100 text-violet-800 border-l-2 border-amber-400 rounded-r-lg font-medium"
                                        : "text-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                    }`}
                                data-tip="Classes"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    stroke="currentColor" fill="none" strokeWidth="2"
                                    className={`size-5 ${isActive("classes") ? "text-amber-500" : "text-violet-400"}`}>
                                    <path d="M4 19.5V4a2 2 0 0 1 2-2h12"></path>
                                    <path d="M18 2v20"></path>
                                    <path d="M4 19.5a2 2 0 0 0 2 2h12"></path>
                                </svg>
                                <span className="is-drawer-close:hidden">Classes</span>
                            </button>
                        </li>

                        {/* SETTINGS */}
                        <li>
                            <button
                                onClick={() => navigate("setting")}
                                className={`is-drawer-close:tooltip is-drawer-close:tooltip-right transition-all duration-200 ${isActive("settings")
                                        ? "bg-violet-100 text-violet-800 border-l-2 border-amber-400 rounded-r-lg font-medium"
                                        : "text-violet-500 hover:bg-violet-50 hover:text-violet-700"
                                    }`}
                                data-tip="Settings"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    stroke="currentColor" fill="none" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className={`size-5 ${isActive("settings") ? "text-amber-500" : "text-violet-400"}`}>
                                    <path d="M20 7h-9"></path>
                                    <path d="M14 17H5"></path>
                                    <circle cx="17" cy="17" r="3"></circle>
                                    <circle cx="7" cy="7" r="3"></circle>
                                </svg>
                                <span className="is-drawer-close:hidden">Settings</span>
                            </button>
                        </li>

                        {/* LOGOUT — pinned to bottom */}
                        <li className="mt-auto pt-4 border-t border-violet-100">
                            <button
                                onClick={handleLogout}
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right text-red-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200"
                                data-tip="Logout"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                    stroke="currentColor" fill="none" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    className="size-5 text-red-400">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                    <polyline points="16 17 21 12 16 7"></polyline>
                                    <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>
                                <span className="is-drawer-close:hidden">Logout</span>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Layout;