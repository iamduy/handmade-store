import { isAuthenticated } from '../auth';
import { axiosClient } from './axiosClient';
const { user, token } = isAuthenticated();
const categoryAPI = {

    getAll() {
        const url = '/categories';
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(cate) {
        const url = `/category/${user._id}`;
        return axiosClient.post(url, cate, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    update(id, data) {
        const url = `/category/${id}/${user._id}`;
        return axiosClient.put(url, data, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    remove(id) {
        const url = `/category/${id}/${user._id}`;
        return axiosClient.delete(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    }

}
export default categoryAPI;




