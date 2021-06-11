import { axiosClient } from './axiosClient';

const productAPI = {

    getAll() {
        const url = '/products';
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    remove(id) {
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },
    // add(product , userId) {
    //     const url = `/product/${userId}`;
    //     return axiosClient.post(url, product);
    // },
    add(product) {
        const url = `/product`;
        return axiosClient.post(url, product);
    },
    update(id, data) {
        const url = `/product/${id}`;
        return axiosClient.put(url, data);
    },
   

}
export default productAPI;




