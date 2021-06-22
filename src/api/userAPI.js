
import { axiosClient } from './axiosClient';

const userAPI = {

    getAll() {
        const url = '/users';
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/user/${id}`;
        return axiosClient.get(url);
    },
    update(id, data) {
        const url = `/user/${id}`;
        return axiosClient.put(url, data);
    },
    signup(user) {
        const url = `/signup`;
        return axiosClient.post(url, user);
    },
    signout() {
        const url = '/signout';
        return axiosClient.get(url);
    },
    // signin(user) {
    //     const url = '/signin';
    //     return axiosClient.post(url, user);
    // },
    
}
export default userAPI;




