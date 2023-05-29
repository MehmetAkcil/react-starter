import axios from './axios'
import { toastError, toastSuccess } from "../Utils/toast";

export const offlineLoginUser = async (email, password, dispatch, login, navigate) => {

    const emailENV = import.meta.env.VITE_API_EMAIL
    const passwordENV = import.meta.env.VITE_API_PASSWORD

    if(emailENV !== email || passwordENV !== password){
        toastError('Kullanici adi veya sifre hatali.');
        return;
    }

    dispatch(login({ 'status': true }));
    toastSuccess('Giris basarili.');
    navigate('/panel');
    setTimeout(() => {
        window.location.reload();
    }, 500)

};


export const onlineLoginUser = async (email, password, dispatch, login, navigate) => {

    const formData = new FormData();

    formData.append('email', email);
    formData.append('password', password);

    try {
        const response = await axios.post('auth/login', formData);
        dispatch(login(response.data));
        toastSuccess('Giris basarili.');
        navigate('/panel');
        setTimeout(() => {
            window.location.reload();
        }, 500)
    } catch (e) {
        toastError('Hatali giris yaptiniz. Lutfen bilgilerinizi kontrol ediniz.')
    }

};