
const initialState = {
    isLoading: false,
    user: '',
    token:localStorage.getItem('token'),
    error: ''
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_REQUEST':
            return { ...state, isLoading: true }
        case 'USER_SUCCESS':
            return {token:localStorage.getItem('token'), user: action.payload, error: '', isLoading: false }
        case 'USER_ERROR':
            return { ...state, user: '', error: action.payload, isLoading: false }
        case 'USER_LOGOUT':
            return {...state,token:''}
        default:
            return state
    }
}

