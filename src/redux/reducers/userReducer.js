import CONST from '../constants'

const initialState = {
    id: 1,
    villageIds: [1, 2],
}

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state
    }
}

export default userReducer
