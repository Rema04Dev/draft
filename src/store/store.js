import { createStore, combineReducers } from 'redux';
import users from './reducers/users'
import filters from './reducers/filters';
export default createStore(combineReducers({
    users,
    filters
}))