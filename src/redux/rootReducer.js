import { combineReducers } from 'redux'
import villagesReducer from './reducers/villagesReducer'
import messagesReducer from './reducers/messagesReducer'
import menuReducer from './reducers/menuReducer'
import villageMenuReducer from './reducers/villageMenuReducer'
import userReducer from './reducers/userReducer'
import serverConfigReducer from './reducers/serverConfigReducer'

const rootReducer = combineReducers({
    villagesReducer,
    messagesReducer,
    menuReducer,
    villageMenuReducer,
    userReducer,
    serverConfigReducer,
})

export default rootReducer
