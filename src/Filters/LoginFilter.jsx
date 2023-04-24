import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

function LoginFilter() {
  const { userData } = useSelector((state) => state.AuthStore);
  return userData ? <Navigate to={`/${import.meta.env.VITE_PANEL_URL}`} /> : <Outlet />;
}

export default LoginFilter