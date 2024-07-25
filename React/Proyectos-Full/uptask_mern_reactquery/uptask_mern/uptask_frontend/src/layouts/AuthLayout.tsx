import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import { ToastContainer } from "react-toastify";

export default function AuthLayout() {
  return (
    <>
      <div className="bg-gray-800 min-h-screen">
        <div className="py-5 mx-auto w-[300px]">
          <Logo />
        </div>
        <div className="py-5 mx-auto w-[400px]">
          <Outlet />
        </div>
      </div>

      <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        theme="dark"
        autoClose={3000}
      />
    </>
  );
}
