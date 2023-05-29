
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