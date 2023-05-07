

export const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^((\+|00)90[-\s]?)(5(\d[-\s]?){9})$/;
    return regex.test(phoneNumber);
}