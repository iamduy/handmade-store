import { API } from '../config'
import userAPI from '../api/userAPI'
export const OnSignUp = async (user) => {
    return await fetch(`${API}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => response.json()).catch(error => console.log(error))

}
export const OnSignIn = async (user) => {
    return await fetch(`${API}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => response.json()).catch(error => console.log(error))
}

export const OnUpdate = (user, token) => {
    return fetch(`${API}/user/${user._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user)
    }).then(response => response.json()).catch(error => console.log(error))

}

export const authenticate = (user, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user))
        next();
        return
    }
}

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    const user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    } else {
        return false;
    }
}

export const OnSignOut = async (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('user');
        localStorage.removeItem('history');
        try {
            localStorage.removeItem('user');
            next();
            await userAPI.signout()
        } catch (error) {
            console.log(error)
        }
    }
}