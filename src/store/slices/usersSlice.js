import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'
// const initialState = {
//     users: [],
//     usersLoadingStatus: 'idle',
// }

const usersAdapter = createEntityAdapter();
const initialState = usersAdapter.getInitialState({
    usersLoadingStatus: 'idle',
})
const usersSLice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersFethcing: (state) => { state.usersLoadingStatus = 'loading' },
        usersFetchingError: (state) => { state.usersLoadingStatus = 'error' },
        usersFetched: (state, action) => {
            state.usersLoadingStatus = 'idle';
            // state.users = action.payload
            usersAdapter.setAll(state, action.payload);
        },
        userCreated: (state, action) => {
            // state.users.push(action.payload);
            usersAdapter.addOne(state, action.payload);
        },
        userDelete: (state, action) => {
            // state.users = state.users.filter(user => user.id !== action.payload)
            usersAdapter.removeOne(state, action.payload)
        }
    }
});

const { actions, reducer } = usersSLice;
export default reducer;
export const { selectAll } = usersAdapter.getSelectors(state => state.users);
export const {
    usersFethcing,
    usersFetchingError,
    usersFetched,
    userCreated,
    userDelete
} = actions;

