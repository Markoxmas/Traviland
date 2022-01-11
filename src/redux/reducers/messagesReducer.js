import CONST from '../constants'

const initialState = {
    error: '',
    success: '',
}

const messagesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONST.SUCCESS_MESSAGE:
            return { ...state, error: '', success: action.message }
        case CONST.ERROR_MESSAGE:
            return { ...state, error: action.message, success: '' }
        default:
            return state
    }
}

export default messagesReducer
