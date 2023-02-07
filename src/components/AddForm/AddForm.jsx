import { Form, Button } from 'react-bootstrap';
import { BsPlusLg } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
import { userCreated } from '../../store/slices/usersSlice'
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const setRandomProperties = () => {
    const age = getRandomNumber(18, 70)
    const ganres = ['rock', 'rap', 'classic']
    const ganre = ganres[getRandomNumber(0, ganres.length - 1)]
    return { age, ganre }
}

const AddForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            username: '',
        },
        onSubmit: async (values) => {
            const newUser = { id: uuidv4(), name: values.username, ...setRandomProperties() }
            await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            })
            dispatch(userCreated(newUser))
            values.username = '';
        }
    });

    return (
        <>
            <h1>Draft React</h1>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                    <div className="d-flex">
                        <Form.Control
                            autoFocus
                            type='text'
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange} />
                        <Button variant='outline-dark' type='submit'><BsPlusLg /></Button>
                    </div>
                </Form.Group>
            </Form>
        </>

    )
}

export default AddForm