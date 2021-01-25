import axios from 'axios';

const applicationUrl = process.env.BACKEND_URL || "http://localhost:5000";

export const executeAPI = async (url,methodType,options = {}) => {
    try{
        const {data} = await axios({
            url: `${applicationUrl}${url}`,
            method: methodType,
            ...options
        });
        return data;
    } catch(ex){
        throw ex;
    }
}
