import axios from 'axios';

const _url = "https://jsonplaceholder.typicode.com";

let url = {
    baseURL: _url
}
let axiosInstance = axios.create(url);

const getUsersAxios = () => {
    return axiosInstance("/users");
}

export {getUsersAxios};