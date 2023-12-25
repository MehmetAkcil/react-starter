
import { Navigate, Outlet } from "react-router-dom"
import {jwtDecode} from "jwt-decode";

const LoginCheck = () => {

  const token = localStorage?.token

  let check = false

  try {
    const decodedToken = jwtDecode(token)

    if (decodedToken) {
      const expirationTime = decodedToken?.exp * 1000;
      const currentTime = Date.now();
      check = currentTime < expirationTime
    }
  } catch (e) {
    check = false
  }


  return check === false ? <Outlet/> : <Navigate to="/home" />
}


export default LoginCheck