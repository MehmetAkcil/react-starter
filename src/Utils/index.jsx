
import { toast } from 'react-toastify';

export function toastError(message) {
    toast.error(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    });
}


export function toastSuccess(message) {
    toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
    });
}


export const moneyFormat = (price, type = ['tr-TR', 'TRY']) => {
    const paraFormati = new Intl.NumberFormat(type[0], {
        style: 'currency',
        currency: type[1]
    });
    return paraFormati.format(price);
}


export const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}