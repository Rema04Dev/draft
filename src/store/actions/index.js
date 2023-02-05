const usersFetching = () => ({ type: 'USERS_FETCHING' });
const usersFetched = (users) => ({ type: 'USERS_FETCHED', payload: users });
const usersFetchingError = () => ({ type: 'USERS_FETCHING_ERROR' })

export { usersFetching, usersFetched, usersFetchingError };