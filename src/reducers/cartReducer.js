import Swal from 'sweetalert2'

if (localStorage.getItem('cart') === null) {
    localStorage.setItem('cart', '[]');
}

const cartStorage = JSON.parse(localStorage.getItem('cart'));

const initialState = {
    data: cartStorage
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const ArrCart = state.data;
            Swal.fire({
                icon: 'success',
                title: `${action.payload.name} đã được thêm vào giỏ hàng của bạn !`,
                showConfirmButton: false,
                timer: 2000
            })
            if (state.data.length === 0) {
                const newCart = [...ArrCart, { ...action.payload, sl: 1 }]
                localStorage.setItem('cart', JSON.stringify(newCart));
                return {
                    data: newCart
                }
            } else {
                const FindIndex = ArrCart.findIndex(items => items._id === action.payload._id);
                if (FindIndex !== -1) {
                    const sl = ArrCart[FindIndex].sl;
                    const newPayload = { ...action.payload, sl: sl + 1 }
                    const newCart = [...ArrCart];
                    newCart.splice(FindIndex, 1, newPayload);
                    return {
                        data: newCart
                    }
                } else {
                    const newCart = [...ArrCart, { ...action.payload, sl : 1 }]
                    localStorage.setItem('cart', JSON.stringify(newCart));
                    return {
                        data: newCart
                    }
                }
            }

        }
        case 'DELETE_TO_CART': {
            const ArrCart = state.data;

            const newCart = ArrCart.filter(prod => prod._id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(newCart));
            return {
                data: newCart
            }

        }

        case 'UP_CART': {
            const ArrCart = state.data;
            const FindIndex = ArrCart.findIndex(items => items._id === action.payload);
            const sl = ArrCart[FindIndex].sl;
            const product = { ...ArrCart[FindIndex], sl : sl + 1 }
            const newCart = [...ArrCart];
            newCart.splice(FindIndex, 1, product);
            localStorage.setItem('cart', JSON.stringify(newCart));
            return {
                data: newCart
            }
        }

        case 'DOWN_CART': {
            const ArrCart = state.data;
            const FindIndex = ArrCart.findIndex(items => items._id === action.payload);
            const sl = ArrCart[FindIndex].sl;
            if (sl > 1) {
                const product = { ...ArrCart[FindIndex], sl: sl - 1 }
                const newCart = [...ArrCart];
                newCart.splice(FindIndex, 1, product);
                localStorage.setItem('cart', JSON.stringify(newCart));
                return {
                    data: newCart
                }
            } else {
                const isConfirm = window.confirm('Do you want delete ?');
                if (isConfirm) {
                    const newCart = ArrCart.filter(product => product._id !== action.payload);
                    localStorage.setItem('cart', JSON.stringify(newCart));
                    return {
                        data: newCart
                    }
                }
            }
            break;
        }

        case 'DELETE_ALL_CART': {
            localStorage.removeItem('cart');
            localStorage.removeItem('history');
            return {
                data: []
            }
        }

        case 'SET_TO_CART': {
            return {
                data: action.payload
            }
        }

        default:
            return state;
    }
}
export default cartReducer;