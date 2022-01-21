import { combineReducers } from 'redux'
import villagesReducer from './reducers/villagesReducer'
import messagesReducer from './reducers/messagesReducer'
import menuReducer from './reducers/menuReducer'
import villageMenuReducer from './reducers/villageMenuReducer'
import userReducer from './reducers/userReducer'
import serverConfigReducer from './reducers/serverConfigReducer'
import resourcesReducer from './reducers/resourcesReducer'

const rootReducer = combineReducers({
    villagesReducer,
    messagesReducer,
    menuReducer,
    villageMenuReducer,
    userReducer,
    serverConfigReducer,
    resourcesReducer,
})

export default rootReducer
