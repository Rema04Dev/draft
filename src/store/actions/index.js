const usersFetching = () => ({ type: 'USERS_FETCHING' });
const usersFetched = (users) => ({ type: 'USERS_FETCHED', payload: users });
const usersFetchingError = () => ({ type: 'USERS_FETCHING_ERROR' })
const userDelete = (id) => ({ type: 'USER_DELETE', payload: id })

const filtersFetching = () => ({ type: 'FILTERS_FETCHING' });
const filtersFetched = (filters) => ({ type: 'FILTERS_FETCHED', payload: filters });
const filtersFetchingError = () => ({ type: 'FILTERS_FETCHING_ERROR' })
const filterChanged = (filter) => ({ type: 'ACTIVE_FILTER_CHANGED', payload: filter })

export {
    usersFetching,
    usersFetched,
    usersFetchingError,
    userDelete,
    filtersFetching,
    filtersFetched,
    filtersFetchingError,
    filterChanged
};