import {axiosClient} from './axiosClient';

const categoryAPI = {
      
    getAll(){
        const url = '/categories';
        return axiosClient.get(url);
    },
    get(id){
        const url = `/category/${id}`;
        return axiosClient.get(url);
    },
    add(cate){
        const url = `/category`;
        return axiosClient.post(url,cate);
    },
    update(id,data){
        const url = `/category/${id}`;
        return axiosClient.put(url,data);
    },
    remove(id){
        const url = `/category/${id}`;
        return axiosClient.delete(url);
    }

}
export default categoryAPI;




