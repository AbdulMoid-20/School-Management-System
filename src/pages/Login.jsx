import { useRef, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from '../Redux/slices/authSlice'
import Toast from "../components/Toast";

const Login = () => {

  const location = useLocation();
  const [toast, setToast] = useState(null);

  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleLogin = () => {
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value
    dispatch(login({ email, password }))
  }

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

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate('/dashboard', {
        state: { message: "Login successful!", type: "success" }
      });
    } else if (authState.error) {
      setToast({ message: authState.error, type: "error" });
    }
  }, [authState.isLoggedIn, authState.error]);

  return (
    <div className="flex h-screen items-center justify-center bg-[#F5F3FF] relative overflow-hidden">

      {/* Glow background */}
      <div className="absolute w-[500px] h-[500px] bg-violet-200/60 blur-[140px] rounded-full top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[350px] h-[350px] bg-amber-100/80 blur-[120px] rounded-full bottom-[-80px] right-[-80px]"></div>

      {toast && <Toast message={toast.message} type={toast.type} />}

      <fieldset className="border border-violet-200 rounded-2xl w-xs p-6
        bg-white/80 backdrop-blur-xl text-violet-900
        shadow-[0_10px_40px_rgba(124,58,237,0.1)]">

        {/* Logo */}
        <div className="flex flex-col items-center mb-6 gap-1">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-md mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
              <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 4a2 2 0 110 4 2 2 0 010-4zm0 12c-2.67 0-5.01-1.37-6.4-3.44C7.04 13.06 9.4 12 12 12s4.96 1.06 6.4 2.56C16.01 16.63 13.67 18 12 18z" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-center text-violet-900">Login</h1>
          <p className="text-xs text-amber-500 tracking-[0.15em] uppercase">Prestige Academy</p>
        </div>

        {/* Email */}
        <label className="label font-semibold text-violet-700">Email</label>
        <input
          type="email"
          ref={emailInputRef}
          className="input w-full bg-white border border-violet-200
            text-violet-900 placeholder-violet-400
            focus:border-amber-400 focus:outline-none rounded-full"
          placeholder="Email"
        />

        {/* Password */}
        <label className="label font-semibold text-violet-700 mt-3">Password</label>
        <input
          type="password"
          ref={passwordInputRef}
          className="input w-full bg-white border border-violet-200
            text-violet-900 placeholder-violet-400
            focus:border-amber-400 focus:outline-none rounded-full"
          placeholder="Password"
        />

        {/* Remember */}
        <label className="label my-3 font-semibold text-violet-600 flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox border-violet-300 bg-white
              checked:bg-violet-600 checked:text-white checked:border-violet-600"
          />
          Remember me
        </label>

        {/* Button */}
        <button
          className="btn rounded-full w-full mt-4
            bg-gradient-to-r from-violet-500 to-purple-500
            text-white hover:from-violet-600 hover:to-purple-600
            shadow-md"
          onClick={handleLogin}
        >
          Login
        </button>

      </fieldset>
    </div>
  )
}

export default Login;