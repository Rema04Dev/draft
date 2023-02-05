import { createStore } from 'redux';
import usersReducer from './reducers/usersReducer';

export default createStore(usersReducer);