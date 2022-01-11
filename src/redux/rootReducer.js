import { combineReducers } from 'redux'
import villagesReducer from './reducers/villagesReducer'
import messagesReducer from './reducers/messagesReducer'

const rootReducer = combineReducers({ villagesReducer, messagesReducer })

export default rootReducer
