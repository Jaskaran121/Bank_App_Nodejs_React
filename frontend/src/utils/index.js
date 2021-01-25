export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return !regex.test(email);
}

export const getError = (ex) => {
    const response = ex.response && ex.response.data && ex.response.data.message;
    if(response)
        return response;
    return ex.message;
}

export const formatCurrency = (currency) => {
    if(!currency)
        return;
    return `CA $${Number.parseFloat(currency).toFixed(2)}`;
}

export const parseNum = (value,decimals) => {
    if(!value)
        return 0;
    return Number.parseFloat(value,decimals);
}
export const getTotalBalance = (items) => {
    let sum = 0;
    if(!items)
        return;
    items.forEach(item => sum+=item.balance);
    return sum;
}