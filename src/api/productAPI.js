import { axiosClient } from './axiosClient';
import { isAuthenticated } from '../auth';
const { user, token } = isAuthenticated();
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
        const url = `/product/${id}/${user._id}`;
        return axiosClient.delete(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    },
    add(product) {
        const url = `/product/${user._id}`;
        return axiosClient.post(url, product, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    },
    update(id, data) {
        const url = `/product/${id}/${user._id}`;
        return axiosClient.put(url, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    },
    getProductPaginate(page, limit, gte, lte, category) {
        if (lte === 0 && category === 0) {
            const url = `/product/pagination?limit=${limit}&page=${page}&gte=${gte}`;
            return axiosClient.post(url);
        } else if (category && lte) {
            const url = `/product/pagination?cateId=${category}&limit=${limit}&page=${page}&gte=${gte}`;
            return axiosClient.post(url);
        } else if (lte) {
            const url = `/product/pagination?limit=${limit}&page=${page}&gte=${gte}&lte=${lte}`;
            return axiosClient.post(url);
        } else if (category) {
            const url = `/product/pagination?cateId=${category}&limit=${limit}&page=${page}&gte=${gte}`;
            return axiosClient.post(url);
        }
    }
}
export default productAPI;




