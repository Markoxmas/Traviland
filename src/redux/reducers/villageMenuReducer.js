import CONST from '../constants'

const initialState = {
    villageId: 1,
}

const villageMenuReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONST.SET_VILLAGE:
            return { ...state, villageId: action.newId }
        default:
            return state
    }
}

export default villageMenuReducer
