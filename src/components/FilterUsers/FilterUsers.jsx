import cn from 'classnames';
import { Button, ButtonGroup, Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtersFetching, filtersFetched, filtersFetchingError, filterChanged } from '../../store/actions/index';

const FilterUsers = () => {
    const api = 'http://localhost:3001/filters';
    const { filters, filtersLoadingStatus, activeFilter } = useSelector(state => state.filters)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filtersFetching());
        const getFilters = async () => {
            try {
                const response = await fetch(api);
                const data = await response.json();
                dispatch(filtersFetched(data));
            } catch (e) {
                dispatch(filtersFetchingError())
            }
        };
        getFilters();
    }, []);

    if (filtersLoadingStatus === 'loading') {
        return <Spinner />
    } else if (filtersLoadingStatus === 'error') {
        return <h5 className='text-danger text-center mt-5'>Filters...oops!</h5>
    }

    const renderFilters = (coll) => {
        if (coll.length === 0) {
            return <h5 className='text-secondary text-center mt-5'>There's no one filter</h5>
        }

        return coll.map(({ label, cssStyle }) => {
            const btnCss = cn({ 'active': label === activeFilter })

            return <Button
                className={btnCss}
                onClick={() => dispatch(filterChanged())}
                key={label}
                id={label}
                variant={cssStyle}>
                {label}
            </Button>

        })
    }

    const elements = renderFilters(filters);
    return (
        <ButtonGroup aria-label="Basic example">
            {elements}
        </ButtonGroup>
    )
}

export default FilterUsers