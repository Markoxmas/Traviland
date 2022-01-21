import CONST from '../constants'

const initialState = {
    clay: 0,
    wood: 0,
    iron: 0,
}

const resourcesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CONST.SET_RESOURCES:
            return {
                ...state,
                clay: action.newResources.clay,
                wood: action.newResources.wood,
                iron: action.newResources.iron,
            }
        default:
            return state
    }
}

export default resourcesReducer
