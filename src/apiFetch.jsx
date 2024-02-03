import axios from 'axios';

const params = {
    headers:{
        Authorization: "bearer " + import.meta.env.VITE_APP_STRAPI_KEY
        ,
    },
};
const BaseURL = import.meta.env.VITE_APP_BASEURLLINK

export const fetchDataFromApi = async (url)=>{
    try{
        const { data } = await  axios.get(BaseURL + url, params)
        return data
    }catch(error){
        console.log(error);
        return error
    }
}


export const makePaymentRequest = axios.create({
    baseURL: import.meta.env.VITE_APP_BASEURLLINK,
    headers:{
        Authorization: "bearer " + import.meta.env.VITE_APP_STRAPI_KEY
        ,
    },
})