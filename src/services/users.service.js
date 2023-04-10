import {axiosInstance} from "./axios.service";
import {urls} from "../configs/urls";

const usersService = {
    getAllUsers: () => axiosInstance.get(urls.users),
    deleteUserById: (id) => axiosInstance.delete(urls.users + id),

}


export {usersService};