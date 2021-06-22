import { isAuthenticated } from "../auth"
import { API } from "../config"
import { axiosClient } from "./axiosClient"
const { user, token } = isAuthenticated()


export const addOrder = (order) => {
    return fetch(`${API}/order/${user._id}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(order)
    }).then(response => response.json()).catch(error => console.log(error.response))
}

const orderAPI = {
    getAll() {
        const url = '/order';
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/order/${id}`;
        return axiosClient.get(url);
    }
}
export default orderAPI;
