import CONST from '../constants'

const initialState = {
    pending: true,
}

const serverConfigReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONST.LOAD_DATA_PENDING:
            return { ...state, pending: true }
        case CONST.LOAD_DATA_SUCCESS:
            return { ...state, ...action.data.serverConfig, pending: false }
        case CONST.LOAD_DATA_FAILED:
            return { ...state, pending: false }
        default:
            return state
    }
}

export default serverConfigReducer
