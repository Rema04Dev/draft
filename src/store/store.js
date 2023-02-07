import { configureStore } from '@reduxjs/toolkit'
import users from './slices/usersSlice';
import filters from './slices/filtersSlice';

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({ type: action })
    }
    return next(action);
}

// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args);

//     const oldDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if (typeof action === 'string') {
//             return oldDispatch({ type: action })
//         }
//         return oldDispatch(action);
//     }
//     return store;
// }

// export default createStore(
//     combineReducers({ users, filters }),
//     compose(applyMiddleware(ReduxThunk, stringMiddleware))
// )

const store = configureStore({
    reducer: { users, filters },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;