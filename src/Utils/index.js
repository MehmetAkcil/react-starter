
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


export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'Europe/Istanbul'
    };
    return date.toLocaleString('tr-TR', options);
}

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'Europe/Istanbul'
    };
    return date.toLocaleString('tr-TR', options);
}

export const formatTimeAgo = (times) => {

    const timestamp = new Date(times).getTime();

    const now = Date.now();
    const secondsAgo = Math.floor((now - timestamp) / 1000);

    if (secondsAgo < 60) {
        return `${secondsAgo} saniye önce`;
    } else if (secondsAgo < 3600) {
        const minutesAgo = Math.floor(secondsAgo / 60);
        return `${minutesAgo} dakika önce`;
    } else if (secondsAgo < 86400) {
        const hoursAgo = Math.floor(secondsAgo / 3600);
        return `${hoursAgo} saat önce`;
    } else {
        const daysAgo = Math.floor(secondsAgo / 86400);

        if(daysAgo > 30){
            return formatDate(times);
        }

        return `${daysAgo} gün önce`;
    }
}
