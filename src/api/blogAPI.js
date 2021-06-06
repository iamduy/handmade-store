import {axiosClient} from './axiosClient';
const blogAPI = {
    getAll(){
        const url = '/blogs';
        return axiosClient.get(url);

    },
    get(id){
        const url = `/blog/${id}`;
        return axiosClient.get(url);
    },
    add(blog){
        const url = `/blog`;
        return axiosClient.post(url,blog);
    },
    update(id,blog){
        const url = `/blog/${id}`;
        return axiosClient.put(url,blog);
    },
    remove(id){
        const url = `/blog/${id}`;
        return axiosClient.delete(url);
    }
}
export default blogAPI;