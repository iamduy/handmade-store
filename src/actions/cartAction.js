export const addCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}
export const deleteCart = (id) => {
    return {
        type: 'DELETE_TO_CART',
        payload: id
    }
}

export const upCart = (id) => {
    return {
        type: 'UP_CART',
        payload: id
    }
}

export const downCart = (id) => {
    return {
        type: 'DOWN_CART',
        payload: id
    }
}

export const deleteAllCart = () => {
    return {
        type: 'DELETE_ALL_CART',
    }
}

export const setCart = (historyCart) => {
    return {
        type: 'SET_TO_CART',
        payload: historyCart
    }
}