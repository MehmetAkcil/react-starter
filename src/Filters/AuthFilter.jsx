import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useSelector } from "react-redux";

function AuthFilter({children}) {

  const { userData } = useSelector(state => state.AuthStore);

  return userData ? children : <Navigate to={`/login`} />


}

AuthFilter.propTypes = {
  children: PropTypes.node
};

export default AuthFilter
