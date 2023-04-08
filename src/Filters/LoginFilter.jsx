import React from 'react';


import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

function LoginFilter({children})
{

  const {userData} = useSelector(state => state.AuthStore);

  return userData ? <Navigate to="/panel" /> :  React.Children.only(children)

}

export default LoginFilter