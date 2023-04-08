
import Layout from "../Components/Layout";

import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

function AuthFilter() {

  const { userData } = useSelector(state => state.AuthStore);

  return userData ? <Layout /> : <Navigate to="/login" />


}

export default AuthFilter
