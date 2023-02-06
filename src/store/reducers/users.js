import { createReducer } from '@reduxjs/toolkit';
import {
    usersFetching,
    usersFetched,
    usersFetchingError,
    userDelete
} from '../actions/index'

const initialState = {
    users: [],
    usersLoadingStatus: 'idle',
}

const users = createReducer(initialState, {
    [usersFetching]: (state) => { state.usersLoadingStatus = 'loading' },
    [usersFetchingError]: (state) => { state.usersLoadingStatus = 'error' },
    [usersFetched]: (state, action) => {
        state.usersLoadingStatus = 'idle';
        state.users = action.payload
    },
    [userDelete]: (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload)
    }
}, [], state => state)

// const users = createReducer(initialState, builder => {
//     builder
//         .addCase(usersFetching, (state) => {
//             state.usersLoadingStatus = 'loading'
//         })
//         .addCase(usersFetched, (state, action) => {
//             state.usersLoadingStatus = 'idle';
//             state.users = action.payload
//         })
//         .addCase(usersFetchingError, (state) => {
//             state.usersLoadingStatus = 'error';
//         })
//         .addCase(userDelete, (state, action) => {
//             state.users = state.users.filter(user => user.id !== action.payload)
//         })
//         .addDefaultCase(() => { })
// })

// const users = (state = initialState, action) => {
//     switch (action.type) {
//         case 'USERS_FETCHING': {
//             return {
//                 ...state,
//                 usersLoadingStatus: 'loading',
//             }
//         }
//         case 'USERS_FETCHED': {
//             return {
//                 ...state,
//                 users: action.payload,
//                 usersLoadingStatus: 'idle'
//             }
//         }
//         case 'USERS_FETCHING_ERROR': {
//             return {
//                 ...state,
//                 usersLoadingStatus: 'error'
//             }
//         }
//         case 'USER_DELETE': {
//             const newList = state.users.filter(user => user.id !== action.payload)
//             return {
//                 ...state,
//                 users: newList
//             }
//         }
//         default: return state;
//     }
// };

export default users;