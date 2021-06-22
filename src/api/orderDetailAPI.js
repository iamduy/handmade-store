import { isAuthenticated } from '../auth'
import { API } from '../config'
import { axiosClient } from './axiosClient'
const { user, token } = isAuthenticated()


export const addOrderDetail = (orderDetail) => {
    return fetch(`${API}/orderdetail/${user._id}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderDetail)

    }).then(response => response.json()).catch(error => console.log(error.response))
}

const orderDetailAPI = {
    getAll() {
        const url = '/orderdetail'
        return axiosClient.get(url);
    }
}
export default orderDetailAPI;