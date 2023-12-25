import axios from './axios';
import { toastError } from "../Utils/toast";

export const findExample = async (id, setData, navigate) => {
    try {
        const {data} = await axios.get(`/example/${id}`);
        setData(data?.data);
    } catch (e) {
        if (e.response?.status === 401) {
            toastError('Yetkiniz bulunmamaktadır. Lütfen tekrar giriş yapınız.');
            navigate('/logout');
        }
        toastError('İşlem sırasında bir sorun oluştu.');
    }
};
