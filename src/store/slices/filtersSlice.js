import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all'
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersFetching: (state) => { state.filtersLoadingStatus = 'loading' },
        filtersFetchingError: (state) => { state.filtersLoadingStatus = 'error' },
        filtersFetched: (state, action) => {
            state.filtersLoadingStatus = 'idle';
            state.filters = action.payload;
        },
        filterChanged: (state, action) => {
            state.activeFilter = action.payload
        }
    }
})

const { reducer, actions } = filtersSlice;

export default reducer;
export const {
    filtersFetching,
    filtersFetchingError,
    filtersFetched,
    filterChanged
} = actions;