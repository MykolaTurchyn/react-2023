import axios from 'axios';

const _url =
    "https://api.spacexdata.com/v3/"
let url = {
    baseURL: _url
}
let axiosInstance = axios.create(url);
const getData = () => {
    return axiosInstance.get("/launches")
};

export {getData};

