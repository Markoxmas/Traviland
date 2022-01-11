import CONST from '../constants'

const initialState = [
    {
        id: 1,
    },
]

const villagesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONST.UPGRADE_SUCCESS:
            return state.map((village) =>
                village.id === action.village.id ? action.village : village
            )
        default:
            return state
    }
}

export default villagesReducer
