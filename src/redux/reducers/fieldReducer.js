import CONST from '../constants'

const initialState = {
    field: {},
}

const fieldReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONST.SET_FIELD:
            return { ...state, field: action.newField }
        default:
            return state
    }
}

export default fieldReducer
