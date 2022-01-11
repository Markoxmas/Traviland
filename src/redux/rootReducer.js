import { combineReducers } from 'redux'
import villagesReducer from './reducers/villagesReducer'
import messagesReducer from './reducers/messagesReducer'
import menuReducer from './reducers/menuReducer'

const rootReducer = combineReducers({
    villagesReducer,
    messagesReducer,
    menuReducer,
})

export default rootReducer
