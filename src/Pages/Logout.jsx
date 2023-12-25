
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../Store/AuthStore.js";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            dispatch(logout());
            navigate("/");
        }, 1000);
    }, [dispatch, navigate]);

    return <div>
        <h1>Logout</h1>
    </div>;
}

export default Logout;