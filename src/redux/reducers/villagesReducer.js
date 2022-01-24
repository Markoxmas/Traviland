import CONST from '../constants'

const initialState = []

const villagesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONST.UPGRADE_SUCCESS:
            return state.map((village) =>
                village.id === action.village.id ? action.village : village
            )
        case CONST.LOAD_DATA_SUCCESS:
            return [...action.data.villages]
        default:
            return state
    }
}

export default villagesReducer
