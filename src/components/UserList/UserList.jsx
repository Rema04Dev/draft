import { BsFillTrashFill } from 'react-icons/bs';
import { ListGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersFetched, usersFetching, usersFetchingError } from '../../store/actions';
const UserList = () => {
    // const [users, setUsers] = useState([]);
    const { users, usersLoadingStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(usersFetching());
        const getUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users')
                const data = await response.json();
                dispatch(usersFetched(data))
            } catch (e) {
                dispatch(usersFetchingError())
                throw e;
            }
        }

        getUsers();
    }, []);

    const handleDelete = async (id) => {
        await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
        })
        setUsers(users => users.filter((user) => user.id !== id));
    }

    return (
        <ListGroup>
            {
                users.length === 0
                    ? <h1>There's no one user</h1>
                    : users.map(({ id, name }) => (
                        <ListGroup.Item key={id}>
                            {name}
                            <button><BsFillTrashFill onClick={() => handleDelete(id)} /></button>
                        </ListGroup.Item>
                    ))
            }
        </ListGroup>
    )
}

export default UserList