
import { Navigate, Outlet } from "react-router-dom"
import { jwtDecode } from 'jwt-decode';
import {Cache} from "../Utils/cache.js";

const AccountCheck = () => {

  const token = localStorage?.token

  let check = false

  const cache = new Cache()

  const isValid = cache.get("isValid")

  if(!isValid){
    try {
      const decodedToken = jwtDecode(token)

      if (decodedToken) {
        const expirationTime = decodedToken?.exp * 1000;
        const currentTime = Date.now();
        check = currentTime < expirationTime
        cache.set("isValid", check)
      }
    } catch (e) {
      check = false
      cache.set("isValid", false)
    }
  }else{
    check = isValid
  }

  return check ? <Outlet /> : <Navigate to="/login" />
}


export default AccountCheck