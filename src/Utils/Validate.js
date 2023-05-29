

export const validEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^((\+|00)90[-\s]?)(5(\d[-\s]?){9})$/;
    return regex.test(phoneNumber);
}

export const validateFormData = async (formData) => {

    await formData.forEach(item => {
        if (item.value === "" || item.value === null || item.value === undefined || item.value.length === 0) {
            item.element.classList.add("is-invalid");
            return true;
        }else{
            item.element.classList.remove("is-invalid");
        }
    })

    return false;
};


export  const formValues = (formData) => {

    const values = {};

    formData.forEach(item => {
        values[item.name] = item.value;
    })

    return values;

}