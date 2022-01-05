import counterReducers from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    counter: counterReducers,
    isLogged: loggedReducer
})

export default rootReducers;