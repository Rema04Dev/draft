const usersFetching = () => ({ type: 'USERS_FETCHING' });
const usersFetched = (users) => ({ type: 'USERS_FETCHED', payload: users });
const usersFetchingError = () => ({ type: 'USERS_FETCHING_ERROR' })
const userDelete = (id) => ({ type: 'USER_DELETE', payload: id })
export { usersFetching, usersFetched, usersFetchingError, userDelete };