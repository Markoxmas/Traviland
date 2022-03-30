import CONST from '../constants'

const initialState = {
    village: {},
}

const villageMenuReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONST.SET_VILLAGE:
            return { ...state, village: action.newVillage }
        case CONST.LOAD_DATA_SUCCESS:
            return { ...state, village: action.data.villages[0] }
        default:
            return state
    }
}

export default villageMenuReducer
