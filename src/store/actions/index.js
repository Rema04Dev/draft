import { createAction } from '@reduxjs/toolkit';

// const usersFetching = () => ({ type: 'USERS_FETCHING' });
const usersFetching = createAction('USERS_FETCHING');

// const usersFetched = (users) => ({ type: 'USERS_FETCHED', payload: users });
const usersFetched = createAction('USERS_FETCHED')

// const usersFetchingError = () => ({ type: 'USERS_FETCHING_ERROR' })
const usersFetchingError = createAction('USERS_FETCHING_ERROR')

// const userDelete = (id) => ({ type: 'USER_DELETE', payload: id })
const userDelete = createAction('USER_DELETE');

// const filtersFetching = () => ({ type: 'FILTERS_FETCHING' });
const filtersFetching = createAction('FILTERS_FETCHING');

// const filtersFetched = (filters) => ({ type: 'FILTERS_FETCHED', payload: filters });
const filtersFetched = createAction('FILTERS_FETCHED');

// const filtersFetchingError = () => ({ type: 'FILTERS_FETCHING_ERROR' })
const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');

// const filterChanged = (filter) => ({ type: 'ACTIVE_FILTER_CHANGED', payload: filter })
const filterChanged = createAction('ACTIVE_FILTER_CHANGED');

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