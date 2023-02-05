const initialState = {
    users: [],
    usersLoadingStatus: 'idle',
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS_FETCHING': {
            return {
                ...state,
                usersLoadingStatus: 'loading',
            }
        }
        case 'USERS_FETCHED': {
            return {
                ...state,
                usersLoadingStatus: 'idle'
            }
        }
        case 'USERS_FETCHING_ERROR': {
            return {
                ...state,
                usersLoadingStatus: 'error'
            }
        }
        default: return state;
    }
};

export default usersReducer;