import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/AuthStore";

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(logout());
            window.location.reload();
        }, 1000);
    }, []);

    return (
        <div>
            <h1>Logout Sayfası</h1>
            <p>Çıkış yapılıyor...</p>
        </div>
    );
};

export default Logout;
