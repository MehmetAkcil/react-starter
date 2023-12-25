import axios from './axios'
import { toastError, toastSuccess } from "../Utils/toast";

export const login = async (email, password, dispatch, login) => {

    try {
        const response = await axios.post('auth/login', { email, password });
        dispatch(login(response.data));
        toastSuccess('Giris basarili.');
        
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    } catch (e) {
        toastError('Hatali giris yaptiniz. Lutfen bilgilerinizi kontrol ediniz.')
    }

};