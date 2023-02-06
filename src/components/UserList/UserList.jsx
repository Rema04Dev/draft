import { BsFillTrashFill } from 'react-icons/bs';
import { ListGroup, Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersFetched, usersFetching, usersFetchingError, userDelete } from '../../store/actions';
const UserList = () => {
    const { users, usersLoadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(usersFetching());
        const getUsers = async () => {
            try {
                const response = await fetch('http://localhost:3001/users')
                const data = await response.json();
                dispatch(usersFetched(data))
            } catch (e) {
                dispatch(usersFetchingError())
                throw e;
            }
        }

        getUsers();
    }, []);

    if (usersLoadingStatus === 'loading') {
        return <Spinner />
    } else if (usersLoadingStatus === 'error') {
        return <h5 className='text-center mt-5'>Oops!</h5>
    }
    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/users/${id}`, {
                method: 'DELETE',
            })
            dispatch(userDelete(id));
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <ListGroup>
            {
                users.length === 0
                    ? <h1>There's no one user</h1>
                    : users.map(({ id, name }) => (
                        <ListGroup.Item key={id} className="d-flex justify-content-between">
                            {name}
                            <button onClick={() => handleDelete(id)}><BsFillTrashFill /></button>
                        </ListGroup.Item>
                    ))
            }
        </ListGroup>
    )
}

export default UserList