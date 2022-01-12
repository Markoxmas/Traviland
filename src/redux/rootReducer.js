import { combineReducers } from 'redux'
import villagesReducer from './reducers/villagesReducer'
import messagesReducer from './reducers/messagesReducer'
import menuReducer from './reducers/menuReducer'
import villageMenu from './reducers/villageMenu'

const rootReducer = combineReducers({
    villagesReducer,
    messagesReducer,
    menuReducer,
    villageMenu,
})

export default rootReducer
