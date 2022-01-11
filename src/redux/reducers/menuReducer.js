import CONST from '../constants'

const initialState = {
    tab: 0,
}

const menuReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONST.SET_MENU:
            return { ...state, tab: action.tab }
        default:
            return state
    }
}

export default menuReducer
