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
                users: action.payload,
                usersLoadingStatus: 'idle'
            }
        }
        case 'USERS_FETCHING_ERROR': {
            return {
                ...state,
                usersLoadingStatus: 'error'
            }
        }

        case 'USER_DELETE': {
            const newList = state.users.filter(user => user.id !== action.payload)
            return {
                ...state,
                users: newList
            }
        }
        default: return state;
    }
};

export default usersReducer;